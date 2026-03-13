import { Injectable } from '@angular/core';
import { Ticket } from '../../models/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private storageKey = 'tickets';

  constructor() {

    // Si no existen tickets en localStorage, cargar datos iniciales
    if (!localStorage.getItem(this.storageKey)) {

      const initialTickets: Ticket[] = [

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

      localStorage.setItem(this.storageKey, JSON.stringify(initialTickets));
    }

  }

  // Obtener tickets
  getTickets(): Ticket[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  // Guardar tickets
  private saveTickets(tickets: Ticket[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(tickets));
  }

  // Crear ticket
  createTicket(ticket: Ticket) {

    const tickets = this.getTickets();

    ticket.id = tickets.length + 1;

    ticket.fechaCreacion = new Date();

    tickets.push(ticket);

    this.saveTickets(tickets);
  }

  // Actualizar ticket
  updateTicket(updatedTicket: Ticket) {

    let tickets = this.getTickets();

    tickets = tickets.map(t =>
      t.id === updatedTicket.id ? updatedTicket : t
    );

    this.saveTickets(tickets);
  }

  // Eliminar ticket
  deleteTicket(id: number) {

    let tickets = this.getTickets();

    tickets = tickets.filter(t => t.id !== id);

    this.saveTickets(tickets);
  }

}