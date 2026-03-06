import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-user-form',
  standalone: true,
  templateUrl: './user-form.component.html',
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule
  ]
})
export class UserFormComponent {

  user: any = {
    nombre: '',
    correo: '',
    rol: ''
  };

  mode: string = 'create';

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {

    this.mode = this.config.data.mode;

    if (this.mode === 'edit') {
      this.user = this.config.data.user;
    }

  }

  save() {
    this.ref.close(this.user);
  }

  cancel() {
    this.ref.close();
  }

}