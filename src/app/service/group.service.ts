import { Injectable } from '@angular/core';
import { Group } from '../models/group.model';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private groups: Group[] = [
    {
      id: 1,
      nivel: 'Básico',
      autor: 'Eduardo',
      nombre: 'Angular Beginners',
      integrantes: 5,
      tickets: 10,
      descripcion: 'Grupo introductorio a Angular'
    }
  ];

  getAll(): Group[] {
    return this.groups;
  }

  add(group: Group) {
    group.id = new Date().getTime();
    this.groups.push(group);
  }

  update(group: Group) {
    const index = this.groups.findIndex(g => g.id === group.id);
    this.groups[index] = group;
  }

  delete(id: number) {
    this.groups = this.groups.filter(g => g.id !== id);
  }
}