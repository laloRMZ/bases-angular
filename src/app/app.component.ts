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

  this.permissionService.setSession(
    'admin@marher.com',
    [
      'group:view', 'group:add','group:edit','group:delete',
      'user:view','user:add','user:edit','user:delete',
      'ticket:view', 'ticket:add','ticket:edit','ticket:delete'
    ]
  );

}

}