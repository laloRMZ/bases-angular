import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [FormsModule, ButtonModule, ToastModule],
  templateUrl: './register-page.component.html',
  providers: [MessageService]
})
export class RegisterPageComponent {

  usuario: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  nombreCompleto: string = '';
  direccion: string = '';
  edad: number | null = null;
  telefono: string = '';

  constructor(private messageService: MessageService) {}

  register() {

    // 🔹 Validar campos vacíos
    if (
      !this.usuario || !this.email || !this.password ||
      !this.confirmPassword || !this.nombreCompleto ||
      !this.direccion || !this.edad || !this.telefono
    ) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Campos incompletos',
        detail: 'Todos los campos son obligatorios'
      });
      return;
    }

    // 🔹 Validar contraseña
    const passwordRegex = /^(?=.*[!@#$%^&*])/;
    if (this.password.length < 10 || !passwordRegex.test(this.password)) {
      this.messageService.add({
        severity: 'error',
        summary: 'Contraseña inválida',
        detail: 'Debe tener mínimo 10 caracteres y un símbolo especial (!@#$%^&*)'
      });
      return;
    }

    // 🔹 Confirmar contraseña
    if (this.password !== this.confirmPassword) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Las contraseñas no coinciden'
      });
      return;
    }

    // 🔹 Validar mayoría de edad
    if (this.edad < 18) {
      this.messageService.add({
        severity: 'error',
        summary: 'Edad inválida',
        detail: 'Solo mayores de edad pueden registrarse'
      });
      return;
    }

    // 🔹 Validar teléfono solo números
    const telefonoRegex = /^[0-9]+$/;
    if (!telefonoRegex.test(this.telefono)) {
      this.messageService.add({
        severity: 'error',
        summary: 'Teléfono inválido',
        detail: 'El teléfono debe contener solo números'
      });
      return;
    }

    // ✅ Si todo es válido
    this.messageService.add({
      severity: 'success',
      summary: 'Registro exitoso',
      detail: 'Usuario registrado correctamente'
    });

    console.log('Registro válido');
  }
}