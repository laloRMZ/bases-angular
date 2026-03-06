import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DynamicDialogModule, DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { ConfirmationService, MessageService } from 'primeng/api';

import { UserFormComponent } from './user-form.component';
import { IfHasPermissionDirective } from '../../../core/directives/if-has-permission.directive';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    ToolbarModule,
    ToastModule,
    ConfirmDialogModule,
    DynamicDialogModule,
    IfHasPermissionDirective
  ],
  providers: [
    DialogService,
    ConfirmationService,
    MessageService
  ]
})
export class UserComponent {

  ref!: DynamicDialogRef;

  users: any[] = [
    {
      id: 1,
      nombre: 'Eduardo',
      correo: 'eduardo@uteq.edu.mx',
      rol: 'Administrador'
    }
  ];

  constructor(
    private dialogService: DialogService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  // CREAR USUARIO
  openNew() {

    this.ref = this.dialogService.open(UserFormComponent, {
      header: 'Nuevo Usuario',
      width: '500px',
      data: { mode: 'create' }
    });

    this.ref.onClose.subscribe((user: any) => {

      if (user) {

        user.id = this.users.length + 1;

        this.users = [...this.users, user];

        this.messageService.add({
          severity: 'success',
          summary: 'Usuario creado',
          detail: 'El usuario fue creado correctamente'
        });

      }

    });

  }

  // EDITAR USUARIO
  editUser(user: any) {

    this.ref = this.dialogService.open(UserFormComponent, {
      header: 'Editar Usuario',
      width: '500px',
      data: {
        mode: 'edit',
        user: { ...user }
      }
    });

    this.ref.onClose.subscribe((updatedUser: any) => {

      if (updatedUser) {

        const index = this.users.findIndex(u => u.id === updatedUser.id);

        if (index !== -1) {
          this.users[index] = updatedUser;
          this.users = [...this.users];
        }

        this.messageService.add({
          severity: 'success',
          summary: 'Usuario actualizado',
          detail: 'El usuario fue actualizado correctamente'
        });

      }

    });

  }

  // ELIMINAR USUARIO
  deleteUser(user: any) {

    this.confirmationService.confirm({
      message: '¿Eliminar este usuario?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',

      accept: () => {

        this.users = this.users.filter(u => u.id !== user.id);

        this.messageService.add({
          severity: 'success',
          summary: 'Usuario eliminado',
          detail: 'El usuario fue eliminado'
        });

      }

    });

  }

}