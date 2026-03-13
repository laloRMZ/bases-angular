import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

import { PermissionService } from '../../../core/service/permission.service';
import { TicketService } from '../../../core/service/ticket.service';
import { Ticket } from '../../../models/ticket.model';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CardModule,
    ButtonModule,
    TableModule
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  tickets: Ticket[] = [];
  assignedTickets: Ticket[] = [];

  groupName: string = '';
  currentUser: string = '';

  llmModel: string = 'GPT-4';

  constructor(
    public permissionService: PermissionService,
    private ticketService: TicketService
  ) {}

  ngOnInit(): void {

    this.loadTickets();

    const group = localStorage.getItem('groupName');
    if (group) {
      this.groupName = group;
    }

    const user = localStorage.getItem('userName');
    if (user) {
      this.currentUser = user;
    }

    this.filterAssignedTickets();
  }

  loadTickets() {
    this.tickets = this.ticketService.getTickets();
  }

  filterAssignedTickets() {
    this.assignedTickets = this.tickets.filter(
      t => t.asignadoA === this.currentUser
    );
  }

  getCount(status: string): number {
    return this.tickets.filter(t => t.estado === status).length;
  }

  getRecentTickets(): Ticket[] {
    return this.tickets.slice(0, 5);
  }

}