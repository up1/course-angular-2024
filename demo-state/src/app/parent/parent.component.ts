import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, NgFor],
  template: `
    <div *ngFor="let m of messages">
      <li>{{ m }}</li>
    </div>
  `,
})
export class ParentComponent {
  messages: string[] = [];

  constructor(private dataService: DataService) {
    this.messages = this.dataService.data().messages;
  }
}