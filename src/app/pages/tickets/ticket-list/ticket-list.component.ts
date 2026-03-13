import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { TicketFiltersComponent, TicketFilter } from '../ticket-filters/ticket-filters.component';

interface Ticket {
  id: number;
  titulo: string;
  estado: string;
  asignado: string;
  prioridad: string;
  fechaLimite: string;
}

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    TicketFiltersComponent,
    RouterModule 
  ],
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.css'
})
export class TicketListComponent implements OnInit {

  tickets: Ticket[] = [];
  filteredTickets: Ticket[] = [];

  // usuario actual (simulación)
  currentUser = 'Eduardo';

  constructor(private router: Router) {}

  ngOnInit(): void {

    this.tickets = [
      {
        id: 1,
        titulo: 'Error login',
        estado: 'Pendiente',
        asignado: 'Eduardo',
        prioridad: '高',
        fechaLimite: '2026-03-20'
      },
      {
        id: 2,
        titulo: 'Bug en dashboard',
        estado: 'En progreso',
        asignado: 'Carlos',
        prioridad: '中',
        fechaLimite: '2026-03-18'
      },
      {
        id: 3,
        titulo: 'Actualizar API',
        estado: 'Revisión',
        asignado: 'Ana',
        prioridad: '非常高',
        fechaLimite: '2026-03-15'
      }
    ];

    // inicialmente muestra todos
    this.filteredTickets = [...this.tickets];
  }

  viewTicket(ticket: Ticket) {
    this.router.navigate(['/tickets', ticket.id]);
  }

  applyFilter(filter: TicketFilter) {

    switch(filter){

      case 'MY_TICKETS':
        this.filteredTickets = this.tickets.filter(
          t => t.asignado === this.currentUser
        );
        break;

      case 'UNASSIGNED':
        this.filteredTickets = this.tickets.filter(
          t => !t.asignado
        );
        break;

      case 'HIGH_PRIORITY':
        this.filteredTickets = this.tickets.filter(
          t => t.prioridad === '高' || t.prioridad === '非常高'
        );
        break;

      default:
        this.filteredTickets = [...this.tickets];

    }

  }

}