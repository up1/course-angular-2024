import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-validation-error',
  templateUrl: './validation-error.component.html',
  styleUrl: './validation-error.component.css'
})
export class ValidationErrorComponent {
  @Input() control!: NgModel;
  @Input() messages: { [key: string]: string } = {};
  @Input() submitted: boolean = false;
}