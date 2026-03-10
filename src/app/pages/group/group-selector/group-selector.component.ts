import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Group {
  id: number;
  name: string;
  description?: string;
}

@Component({
  selector: 'app-group-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './group-selector.component.html',
  styleUrl: './group-selector.component.css'
})
export class GroupSelectorComponent {

  groups: Group[] = [
    { id: 1, name: 'Equipo Dev', description: 'Development team' },
    { id: 2, name: 'Soporte', description: 'Support team' },
    { id: 3, name: 'UX', description: 'Design team' }
  ];

  constructor(private router: Router) {}

  selectGroup(group: Group) {

    localStorage.setItem('groupId', group.id.toString());
    localStorage.setItem('groupName', group.name);

    this.router.navigate(['/dashboard']);
  }
}