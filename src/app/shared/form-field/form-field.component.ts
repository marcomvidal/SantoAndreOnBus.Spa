import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css'],
  styles: ['form-group']
})
export class FormFieldComponent implements OnInit {

  @Input() autoFocus: boolean;
  @Input() columns: number;
  @Input() label: string;
  @Input() name: string;
  @Input() type: string;

  constructor() { }

  ngOnInit() {
  }

}
