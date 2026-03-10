import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';

import { TicketService } from '../../../core/service/ticket.service';

@Component({
  selector: 'app-ticket-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    TextareaModule,
    DropdownModule,
    ButtonModule,
    CardModule,
    InputGroupModule,
    InputGroupAddonModule
  ],
  templateUrl: './ticket-form.component.html'
})
export class TicketFormComponent {

  ticket: any = {
    titulo: '',
    descripcion: '',
    prioridad: 'MEDIA',
    estado: 'PENDIENTE'
  };

  prioridades = [
    { label: 'Baja', value: 'BAJA' },
    { label: 'Media', value: 'MEDIA' },
    { label: 'Alta', value: 'ALTA' }
  ];

  constructor(private ticketService: TicketService){}

  createTicket(){
    this.ticketService.createTicket(this.ticket);
    alert("Ticket creado");
  }

}