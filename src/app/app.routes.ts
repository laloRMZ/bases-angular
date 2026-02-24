import { Routes } from '@angular/router';
import { CounterPageComponents } from './pages/counter/counter-page.component';
import { LandingPageComponent } from './pages/landing/landing-page.component';
import { LoginPageComponent } from './pages/Auth/login-page.component';
import { RegisterPageComponent } from './pages/Auth/register-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent, // Página principal
  },
  {
    path: 'counter',
    component: CounterPageComponents,
  },
  {
    path: 'auth/login',
    component: LoginPageComponent,
  },
  {
    path: 'auth/register',
    component: RegisterPageComponent,
  },
];