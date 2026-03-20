import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';

import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';

import { MessageService } from 'primeng/api';
import { AuthService } from '../../core/service/auth.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    FormsModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    InputGroupModule,
    InputGroupAddonModule
  ],
  templateUrl: './login-page.component.html',
  providers: [MessageService]
})
export class LoginPageComponent {

  email: string = '';
  password: string = '';

  private API_URL = 'https://spatial-delcine-devemma-edfc3f92.koyeb.app';

  constructor(
    private messageService: MessageService,
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  login() {

    // 🔹 Validación básica
    if (!this.email || !this.password) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Campos vacíos',
        detail: 'Debe ingresar email y contraseña'
      });
      return;
    }

    console.debug('Intentando login con', this.email, this.password);

    // 🔐 LOGIN API
    this.http.post(`${this.API_URL}/login`, {
      email: this.email,
      password: this.password
    }).subscribe({
      next: (res: any) => {

        console.debug('Respuesta del login', res);

        // 🔑 Guardar token
        localStorage.setItem('token', res.token);

        // 🔐 Obtener permisos
        this.http.get(`${this.API_URL}/permissions`).subscribe({
          next: (perms: any) => {
            console.debug('Permisos obtenidos', perms);

            // Guardar permisos en servicio
            this.authService.setPermissions(perms.data[0].permissions);

            this.messageService.add({
              severity: 'success',
              summary: 'Login correcto',
              detail: 'Bienvenido al sistema'
            });

            setTimeout(() => {
              this.router.navigate(['/home']);
            }, 1000);
          },
          error: () => {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'No se pudieron obtener permisos'
            });
          }
        });

      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error de acceso',
          detail: 'Credenciales incorrectas'
        });
      }
    });
  }
}