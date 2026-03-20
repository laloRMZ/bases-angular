import { Routes } from '@angular/router';

import { CounterPageComponents } from './pages/counter/counter-page.component';
import { LandingPageComponent } from './pages/landing/landing-page.component';

import { LoginPageComponent } from './pages/Auth/login-page.component';
import { RegisterPageComponent } from './pages/Auth/register-page.component';

import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomePageComponent } from './pages/home/home-page/home-page.component';

import { GroupComponent } from './pages/group/group.component';
import { UserComponent } from './pages/user/user/user.component';

import { TicketListComponent } from './pages/tickets/ticket-list/ticket-list.component';
import { DashboardComponent } from './pages/tickets/dashboard/dashboard.component';
import { KanbanComponent } from './pages/tickets/kanban/kanban.component';
import { TicketFormComponent } from './pages/tickets/ticket-form/ticket-form.component';
import { TicketDetailComponent } from './pages/tickets/ticket-detail/ticket-detail.component';

import { permissionGuard } from './core/guards/permission/permission.guard';

export const routes: Routes = [

  // 🌐 Landing pública
  {
    path: '',
    component: LandingPageComponent,
  },

  // 🔐 Auth
  {
    path: 'auth/login',
    component: LoginPageComponent,
  },
  {
    path: 'auth/register',
    component: RegisterPageComponent,
  },

  // 🧩 Layout principal
  {
    path: '',
    component: MainLayoutComponent,
    children: [

      // 🏠 HOME (requiere login básico)
      {
        path: 'home',
        component: HomePageComponent,
        canActivate: [permissionGuard],
        data: { permission: 'user:view' }
      },

      {
        path: 'counter',
        component: CounterPageComponents,
      },

      // 👤 USERS
      {
        path: 'user',
        loadComponent: () =>
          import('./pages/user/user/user-permissions.component')
            .then(m => m.UserPermissionsPageComponent),
        canActivate: [permissionGuard],
        data: { permission: 'user:view' }
      },

      // 👥 GROUPS
      {
        path: 'group',
        component: GroupComponent,
        canActivate: [permissionGuard],
        data: { permission: 'group:view' }
      },

      /* ===== 🎫 TICKETS ===== */

      {
        path: 'tickets',
        component: TicketListComponent,
        canActivate: [permissionGuard],
        data: { permission: 'ticket:view' }
      },

      {
        path: 'tickets/dashboard',
        component: DashboardComponent,
        canActivate: [permissionGuard],
        data: { permission: 'ticket:view' }
      },

      {
        path: 'tickets/kanban',
        component: KanbanComponent,
        canActivate: [permissionGuard],
        data: { permission: 'ticket:view' }
      },

      {
        path: 'tickets/create',
        component: TicketFormComponent,
        canActivate: [permissionGuard],
        data: { permission: 'ticket:add' }
      },

      {
        path: 'tickets/:id',
        component: TicketDetailComponent,
        canActivate: [permissionGuard],
        data: { permission: 'ticket:view' }
      },

      /* =================== */

      // Rutas alternativas
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