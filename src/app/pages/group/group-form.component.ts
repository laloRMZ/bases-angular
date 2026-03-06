import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TextareaModule } from 'primeng/textarea';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputGroup } from "primeng/inputgroup";
import { InputGroupAddon } from "primeng/inputgroupaddon";

@Component({
  standalone: true,
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    InputNumberModule,
    ButtonModule,
    TextareaModule,
    InputGroup,
    InputGroupAddon
]
})
export class GroupFormComponent implements OnInit {

  group: any = {};

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}

  ngOnInit() {
    if (this.config.data?.mode === 'edit') {
      this.group = { ...this.config.data.group };
    }
  }

  save() {
    this.ref.close(this.group);
  }

  cancel() {
    this.ref.close();
  }
}