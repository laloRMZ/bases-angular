import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  private permissions: string[] = [];
  private userEmail: string | null = null;

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage() {
    const storedPermissions = localStorage.getItem('permissions');
    const storedUser = localStorage.getItem('user');

    if (storedPermissions) {
      this.permissions = JSON.parse(storedPermissions);
    }

    if (storedUser) {
      this.userEmail = storedUser;
    }
  }

  setSession(email: string, permissions: string[]) {
    this.userEmail = email;
    this.permissions = permissions;

    localStorage.setItem('permissions', JSON.stringify(permissions));
    localStorage.setItem('user', email);
  }

  getPermissions(): string[] {
    return this.permissions;
  }

  getUser() {
    return this.userEmail;
  }

  hasPermission(permission: string): boolean {
    return this.permissions.includes(permission);
  }

  hasAnyPermission(perms: string[]): boolean {
    return perms.some(p => this.permissions.includes(p));
  }

  clearSession() {
    this.permissions = [];
    this.userEmail = null;

    localStorage.removeItem('permissions');
    localStorage.removeItem('user');
  }
}