import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Button, ButtonModule } from "primeng/button";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule, Button, ButtonModule],
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {

  email: string = '';
  password: string = '';

  login() {
    console.log('Login simple (sin backend):', this.email, this.password);
    alert('Login simulado ✅');
  }
}