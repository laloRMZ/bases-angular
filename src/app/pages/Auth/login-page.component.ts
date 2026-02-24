import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule, ButtonModule, ToastModule],
  templateUrl: './login-page.component.html',
  providers: [MessageService]
})
export class LoginPageComponent {

  email: string = '';
  password: string = '';

  private readonly EMAIL_VALIDO = 'admin@uteq.edu.mx';
  private readonly PASSWORD_VALIDO = 'Admin@12345';

  constructor(private messageService: MessageService) {}

  login() {
    // Validar campos vacíos
    if (!this.email || !this.password) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Campos vacíos',
        detail: 'Debe ingresar email y contraseña'
      });
      return;
    }

    // Validar credenciales hardcodeadas
    if (
      this.email === this.EMAIL_VALIDO &&
      this.password === this.PASSWORD_VALIDO
    ) {
      this.messageService.add({
        severity: 'success',
        summary: 'Login correcto',
        detail: 'Bienvenido al sistema'
      });

      console.log('Login exitoso');
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error de acceso',
        detail: 'Credenciales incorrectas'
      });
    }
  }
}