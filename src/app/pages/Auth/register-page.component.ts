import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Button } from "primeng/button";

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [FormsModule, Button],
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {

  name: string = '';
  email: string = '';
  password: string = '';

  register() {
    console.log('Registro simulado:', this.name, this.email, this.password);
    alert('Registro simulado 🎉');
  }
}