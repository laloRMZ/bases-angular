import { Routes } from '@angular/router';

import { CounterPageComponents } from './pages/counter/counter-page.component';
import { LandingPageComponent } from './pages/landing/landing-page.component';

import { LoginPageComponent } from './pages/Auth/login-page.component';
import { RegisterPageComponent } from './pages/Auth/register-page.component';

import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomePageComponent } from './pages/home/home-page/home-page.component';

import { GroupComponent } from './pages/group/group.component';
import { UserComponent } from './pages/user/user/user.component';

import { GroupSelectorComponent } from './pages/group/group-selector/group-selector.component';
import { TicketListComponent } from './pages/tickets/ticket-list/ticket-list.component';

import { DashboardComponent } from './pages/tickets/dashboard/dashboard.component';
import { KanbanComponent } from './pages/tickets/kanban/kanban.component';
import { TicketFormComponent } from './pages/tickets/ticket-form/ticket-form.component';
import { TicketDetailComponent } from './pages/tickets/ticket-detail/ticket-detail.component';
import { permissionGuard } from './core/guards/permission/permission.guard';
  

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
        path: 'group',
        loadComponent: () => import('./pages/group/group.component')
          .then(m => m.GroupComponent),
        canActivate: [permissionGuard]
      },
      {
        path: 'user',
        component: UserComponent,
      },

      /* ===== TICKETS ===== */

      {
        path: 'tickets/dashboard',
        component: DashboardComponent,
      },
      {
        path: 'tickets/kanban',
        component: KanbanComponent,
      },
      {
        path: 'tickets/create',
        component: TicketFormComponent,
      },
      {
        path: 'tickets/:id',
        component: TicketDetailComponent,
      },

      {
        path: 'tickets',
        component: TicketListComponent
      },
      /* =================== */

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