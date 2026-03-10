import { Injectable } from '@angular/core';
import { Ticket } from '../../models/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  tickets: Ticket[] = [

    {
      id: 1,
      titulo: 'Error en login',
      descripcion: 'No permite iniciar sesión',
      estado: 'PENDIENTE',
      prioridad: 'ALTA',
      asignadoA: 'Juan',
      grupo: 'Backend',
      fechaCreacion: new Date(),
      fechaLimite: new Date(),
      comentarios: ['Revisar API'],
      historial: ['Ticket creado']
    },

    {
      id: 2,
      titulo: 'Bug en dashboard',
      descripcion: 'No carga estadísticas',
      estado: 'EN_PROGRESO',
      prioridad: 'MEDIA',
      asignadoA: 'Ana',
      grupo: 'Frontend',
      fechaCreacion: new Date(),
      fechaLimite: new Date(),
      comentarios: [],
      historial: ['Ticket creado']
    }

  ];

  getTickets() {
    return this.tickets;
  }

  createTicket(ticket: Ticket) {
    ticket.id = this.tickets.length + 1;
    this.tickets.push(ticket);
  }

}