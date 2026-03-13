import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DynamicDialogModule, DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { RouterModule } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

import { GroupFormComponent } from './group-form.component';
import { IfHasPermissionDirective } from '../../core/directives/if-has-permission.directive';
import { Card } from "primeng/card";

@Component({
  selector: 'app-group',
  standalone: true,
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    ToolbarModule,
    ToastModule,
    ConfirmDialogModule,
    DynamicDialogModule,
    IfHasPermissionDirective,
    Card,
    RouterModule 
],
  providers: [
    DialogService,
    ConfirmationService,
    MessageService
  ]
})
export class GroupComponent {

  ref!: DynamicDialogRef;

  groups: any[] = [
    {
      id: 1,
      nivel: 'Básico',
      autor: 'Eduardo',
      nombre: 'Angular 101',
      integrantes: 5,
      tickets: 10,
      descripcion: 'Curso básico de Angular'
    }
  ];

  constructor(
    private dialogService: DialogService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  // 🔹 CREAR GRUPO
  openNew() {

    this.ref = this.dialogService.open(GroupFormComponent, {
      header: 'Nuevo Grupo',
      width: '500px',
      data: {
        mode: 'create'
      }
    });

    this.ref.onClose.subscribe((group: any) => {

      if (group) {

        group.id = this.groups.length + 1;

        this.groups = [...this.groups, group];

        this.messageService.add({
          severity: 'success',
          summary: 'Grupo creado',
          detail: 'El grupo fue creado correctamente'
        });

      }

    });

  }
  
  // 🔹 EDITAR GRUPO
  editGroup(group: any) {

    this.ref = this.dialogService.open(GroupFormComponent, {
      header: 'Editar Grupo',
      width: '500px',
      data: {
        mode: 'edit',
        group: { ...group }
      }
    });

    this.ref.onClose.subscribe((updatedGroup: any) => {

      if (updatedGroup) {

        const index = this.groups.findIndex(g => g.id === updatedGroup.id);

        if (index !== -1) {
          this.groups[index] = updatedGroup;
          this.groups = [...this.groups];
        }

        this.messageService.add({
          severity: 'success',
          summary: 'Grupo actualizado',
          detail: 'El grupo fue actualizado correctamente'
        });

      }

    });

  }

  // 🔹 ELIMINAR GRUPO
  deleteGroup(group: any) {

    this.confirmationService.confirm({
      message: '¿Estás seguro de eliminar este grupo?',
      header: 'Confirmar eliminación',
      icon: 'pi pi-exclamation-triangle',

      acceptLabel: 'Sí',
      rejectLabel: 'No',

      accept: () => {

        this.groups = this.groups.filter(g => g.id !== group.id);

        this.messageService.add({
          severity: 'success',
          summary: 'Grupo eliminado',
          detail: 'El grupo fue eliminado correctamente'
        });

      }

    });

  }

}