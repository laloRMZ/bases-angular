import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketService } from '../../../core/service/ticket.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ticket-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent {

  ticket: any;

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService
  ) {}

  ngOnInit() {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    const tickets = this.ticketService.getTickets();

    this.ticket = tickets.find(t => t.id === id);

  }

}