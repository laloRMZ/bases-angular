import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { BadgeModule } from 'primeng/badge';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'app-group',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    BadgeModule,
    ProgressBarModule
  ],
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent {

}