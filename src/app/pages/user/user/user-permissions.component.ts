import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { PermissionService } from '../../../core/service/permission.service';

import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

interface User {
  email: string;
  permissions: string[];
}

@Component({
  selector: 'app-user-permissions',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule,
    ButtonModule,
    CheckboxModule,
    TagModule,
    CardModule,
    InputTextModule
  ],
  templateUrl: './user-permissions.component.html',
})
export class UserPermissionsPageComponent implements OnInit {

  users: User[] = [];
  selectedUser: User | null = null;
  allPermissions: string[] = [];
  groupedPermissions: any = {};

  // 🔐 MODAL PERMISOS
  displayModal: boolean = false;

  // 👤 MODAL USUARIO
  displayUserModal: boolean = false;
  isEditMode: boolean = false;

  newUser: User = {
    email: '',
    permissions: []
  };

  constructor(
    private permissionService: PermissionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadPermissions();
    this.loadUsers();
  }

  loadPermissions() {
    this.allPermissions = [
      'user:view', 'user:add', 'user:edit', 'user:delete',
      'group:view', 'group:add', 'group:edit', 'group:delete',
      'ticket:view', 'ticket:add', 'ticket:edit', 'ticket:delete'
    ];

    this.groupPermissions();
  }

  loadUsers() {
    this.users = [
      { email: 'admin@marher.com', permissions: [] },
      { email: 'pm@marher.com', permissions: [] },
      { email: 'dev@marher.com', permissions: [] },
      { email: 'support@marher.com', permissions: [] }
    ];
  }

  groupPermissions() {
    this.groupedPermissions = {
      USERS: [],
      GROUPS: [],
      TICKETS: []
    };

    this.allPermissions.forEach(p => {
      if (p.startsWith('user')) this.groupedPermissions.USERS.push(p);
      else if (p.startsWith('group')) this.groupedPermissions.GROUPS.push(p);
      else if (p.startsWith('ticket')) this.groupedPermissions.TICKETS.push(p);
    });
  }

  formatPermission(permission: string): string {
    const map: any = {
      view: 'Ver',
      add: 'Crear',
      edit: 'Editar',
      delete: 'Eliminar',
      manage: 'Administrar',
      profile: 'Perfil',
      state: 'Estado',
      comment: 'Comentario'
    };

    return permission.split(':').map(p => map[p] || p).join(' ');
  }

  // 🔐 PERMISOS
  openPermissions(user: User) {
    this.selectedUser = {
      email: user.email,
      permissions: [...user.permissions]
    };
    this.displayModal = true;
  }

  hasPermission(permission: string): boolean {
    return this.selectedUser?.permissions.includes(permission) || false;
  }

  togglePermission(permission: string) {
    if (!this.selectedUser) return;

    const index = this.selectedUser.permissions.indexOf(permission);

    if (index > -1) {
      this.selectedUser.permissions.splice(index, 1);
    } else {
      this.selectedUser.permissions.push(permission);
    }
  }

  savePermissions() {
    const index = this.users.findIndex(u => u.email === this.selectedUser?.email);

    if (index !== -1 && this.selectedUser) {
      this.users[index].permissions = [...this.selectedUser.permissions];
    }

    this.displayModal = false;
  }

  // 👤 CRUD USUARIOS
  openCreateUser() {
    this.newUser = { email: '', permissions: [] };
    this.isEditMode = false;
    this.displayUserModal = true;
  }

  editUser(user: User) {
    this.newUser = { ...user };
    this.isEditMode = true;
    this.displayUserModal = true;
  }

  saveUser() {
    if (!this.newUser.email) return;

    if (this.isEditMode) {
      const index = this.users.findIndex(u => u.email === this.newUser.email);
      if (index !== -1) {
        this.users[index] = { ...this.newUser };
      }
    } else {
      this.users.push({ ...this.newUser });
    }

    this.displayUserModal = false;
  }

  deleteUser(user: User) {
    this.users = this.users.filter(u => u.email !== user.email);
  }

  goHome() {
    this.router.navigate(['/home']);
  }
}