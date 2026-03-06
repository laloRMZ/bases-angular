import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  private permissions: string[] = [];

  constructor() {}

  setPermissions(permissions: string[]) {
    this.permissions = permissions;
  }

  hasPermission(permission: string): boolean {
    return this.permissions.includes(permission);
  }

  hasAnyPermission(perms: string[]): boolean {
    return perms.some(p => this.permissions.includes(p));
  }
}