import { Component } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { RouterModule } from '@angular/router';
import { PermissionService } from '../../core/service/permission.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [PanelMenuModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  items:any[] = [];

  constructor(private permissionService: PermissionService) {

    this.items = [

      {
        label: 'Group',
        icon: 'pi pi-users',
        routerLink: '/group',
        visible: this.permissionService.hasPermission('groups:view')
      },

      {
        label: 'User',
        icon: 'pi pi-user',
        routerLink: '/user',
        visible: this.permissionService.hasPermission('users:view')
      },

      {
        label: 'Counter',
        icon: 'pi pi-lock',
        routerLink: '/counter'
      }

    ];
  }

}