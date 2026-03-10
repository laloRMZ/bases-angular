import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ButtonModule } from 'primeng/button';

import { TicketService } from '../../../core/service/ticket.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule
  ],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

  tickets: any[] = [];

  constructor(private ticketService: TicketService) {}

  ngOnInit() {
    this.tickets = this.ticketService.getTickets();
  }

  getCount(status: string) {
    return this.tickets.filter(t => t.estado === status).length;
  }

}