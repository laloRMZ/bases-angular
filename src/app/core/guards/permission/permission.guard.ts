import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { PermissionService } from '../../service/permission.service';

export const permissionGuard: CanActivateFn = () => {

  const permissionService = inject(PermissionService);

  return permissionService.hasPermission('groups:view');

};