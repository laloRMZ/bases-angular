import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Card } from "primeng/card";

export type TicketFilter =
  | 'ALL'
  | 'MY_TICKETS'
  | 'UNASSIGNED'
  | 'HIGH_PRIORITY';

@Component({
  selector: 'app-ticket-filters',
  standalone: true,
  imports: [CommonModule, ButtonModule, Card],
  templateUrl: './ticket-filters.component.html',
  styleUrl: './ticket-filters.component.css'
})
export class TicketFiltersComponent {

  @Output() filterChange = new EventEmitter<TicketFilter>();

  currentFilter: TicketFilter = 'ALL';

  setFilter(filter: TicketFilter) {
    this.currentFilter = filter;
    this.filterChange.emit(filter);
  }

}