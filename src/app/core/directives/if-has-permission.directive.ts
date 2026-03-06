import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { PermissionService } from '../service/permission.service';

@Directive({
  selector: '[ifHasPermission]',
  standalone: true
})
export class IfHasPermissionDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private permissionService: PermissionService
  ) {}

  @Input() set ifHasPermission(permissions: string[]) {

    const allowed = this.permissionService.hasAnyPermission(permissions);

    if (allowed) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }

  }

}