import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { PermissionService } from './core/service/permission.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Eduardo Ramirez';

  constructor(private permissionService: PermissionService) {


    this.permissionService.setPermissions([
      'groups:view', 'groups:add','groups:edit','groups:delete',
      'users:view','users:add','users:edit','users:delete',
      'tickets:view'
    ]);

  }

}