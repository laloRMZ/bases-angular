import { Component } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [PanelMenuModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  items = [
    {
      label: 'Group',
      icon: 'pi pi-users',
      routerLink: '/group'
    },
    {
      label: 'User',
      icon: 'pi pi-user',
      routerLink: '/user'
    }
    ,
    {
      label: 'Counter',
      icon: 'pi pi-lock',
      routerLink: '/counter'
    },
    {
      label: 'Landing',
      icon: 'pi pi-home',
      routerLink: '/landing'
    },
    {
      label: 'Login',
      icon: 'pi pi-sign-in',
      routerLink: '/auth/login'
    },
    {
      label: 'Register',
      icon: 'pi pi-user-plus',
      routerLink: '/auth/register'
    }

  ];
}