import { Component } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { RouterModule, Router } from '@angular/router';
import { PermissionService } from '../../core/service/permission.service';

// 🔥 IMPORTA ESTO
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    PanelMenuModule,
    RouterModule,
    ButtonModule // 🔥 AQUI
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  items:any[] = [];

  constructor(
    private permissionService: PermissionService,
    private router: Router // 🔥 TAMBIÉN ARREGLA ESTO
  ) {

    this.items = [
      {
        label: 'Group',
        icon: 'pi pi-users',
        routerLink: '/group',
        visible: this.permissionService.hasPermission('group:view')
      },
      {
        label: 'User',
        icon: 'pi pi-user',
        routerLink: '/user',
        visible: this.permissionService.hasPermission('user:view')
      },
      {
        label: 'Counter',
        icon: 'pi pi-lock',
        routerLink: '/counter'
      }
    ];
  }

  logout() {
    localStorage.removeItem('token');
    sessionStorage.clear();

    this.router.navigate(['/auth/login']);
  }
}