import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TicketService } from '../../../core/service/ticket.service';

// PrimeNG
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-kanban',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CardModule,
    TagModule,
    ButtonModule
  ],
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css']
})
export class KanbanComponent {

  tickets: any[] = [];

  constructor(private ticketService: TicketService) {}

  ngOnInit() {
    this.tickets = this.ticketService.getTickets();
  }

  getTicketsByStatus(status: string) {
    return this.tickets.filter(t => t.estado === status);
  }

}