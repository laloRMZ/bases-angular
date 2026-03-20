import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private permissions: string[] = [];

  setPermissions(perms: string[]) {
    this.permissions = perms;
    localStorage.setItem('permissions', JSON.stringify(perms));
  }

  loadPermissions() {
    const perms = localStorage.getItem('permissions');
    this.permissions = perms ? JSON.parse(perms) : [];
  }

  hasPermission(permission: string): boolean {
    return this.permissions.includes(permission);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.clear();
  }
}