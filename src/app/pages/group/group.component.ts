import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { GroupFormComponent } from './group-form.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';


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
    ConfirmDialogModule
  ],
  providers: [DialogService, ConfirmationService, MessageService]
})
export class GroupComponent {

  ref: DynamicDialogRef | undefined;

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

  openNew() {
    this.ref = this.dialogService.open(GroupFormComponent, {
      header: 'Nuevo Grupo',
      width: '500px',
      data: { mode: 'create' }
    });

    this.ref.onClose.subscribe((group: any) => {
      if (group) {
        group.id = this.groups.length + 1;
        this.groups.push(group);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Grupo creado correctamente'
        });
      }
    });
  }

  editGroup(group: any) {
    this.ref = this.dialogService.open(GroupFormComponent, {
      header: 'Editar Grupo',
      width: '500px',
      data: { mode: 'edit', group }
    });

    this.ref.onClose.subscribe((updatedGroup: any) => {
      if (updatedGroup) {
        const index = this.groups.findIndex(g => g.id === updatedGroup.id);
        this.groups[index] = updatedGroup;

        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Grupo actualizado'
        });
      }
    });
  }

  deleteGroup(group: any) {
    this.confirmationService.confirm({
      message: '¿Estás seguro de eliminar este grupo?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Agree',
      rejectLabel: 'X',
      accept: () => {
        this.groups = this.groups.filter(g => g.id !== group.id);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Grupo eliminado'
        });
      }
    });
  }
}