import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TicketService } from '../../../core/service/ticket.service';

import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';

import {
  DragDropModule,
  CdkDragDrop,
  transferArrayItem,
  moveItemInArray
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-kanban',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CardModule,
    TagModule,
    ButtonModule,
    DragDropModule,
    RouterModule 
  ],
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css']
})
export class KanbanComponent {

  pendientes: any[] = [];
  enProgreso: any[] = [];
  revision: any[] = [];
  finalizado: any[] = [];

  constructor(private ticketService: TicketService) {}

  ngOnInit() {

    const tickets = this.ticketService.getTickets();

    this.pendientes = tickets.filter(t => t.estado === 'PENDIENTE');
    this.enProgreso = tickets.filter(t => t.estado === 'EN_PROGRESO');
    this.revision = tickets.filter(t => t.estado === 'REVISION');
    this.finalizado = tickets.filter(t => t.estado === 'FINALIZADO');

  }

  drop(event: CdkDragDrop<any[]>, nuevoEstado: string) {

    if (event.previousContainer === event.container) {

      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

    } else {

      const ticket = event.previousContainer.data[event.previousIndex];

      ticket.estado = nuevoEstado;

      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

    }

  }

}