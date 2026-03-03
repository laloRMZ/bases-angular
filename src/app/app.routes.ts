import { Routes } from '@angular/router';

import { CounterPageComponents } from './pages/counter/counter-page.component';
import { LandingPageComponent } from './pages/landing/landing-page.component';

import { LoginPageComponent } from './pages/Auth/login-page.component';
import { RegisterPageComponent } from './pages/Auth/register-page.component';

import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomePageComponent } from './pages/home/home-page/home-page.component';

import { GroupComponent } from './pages/group/group/group.component';
import { UserComponent } from './pages/user/user/user.component';

export const routes: Routes = [

  // Landing pública
  {
    path: '',
    component: LandingPageComponent,
  },

  // Auth
  {
    path: 'auth/login',
    component: LoginPageComponent,
  },
  {
    path: 'auth/register',
    component: RegisterPageComponent,
  },

  // Layout principal
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomePageComponent,
      },
      {
        path: 'counter',
        component: CounterPageComponents,
      },
      {
        path: 'group',
        component: GroupComponent,
      },
      {
        path: 'user',
        component: UserComponent,
      },
      {
        path: 'landing',
        component: LandingPageComponent,
      },
      {
        path: 'login',
        component: LoginPageComponent,
      },
      {
        path: 'register',
        component: RegisterPageComponent,
      }
      
    ]
  },

];