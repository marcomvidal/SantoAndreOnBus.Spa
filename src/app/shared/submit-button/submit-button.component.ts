import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[submit-button]',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.css'],
  host: { 'class': 'btn btn-primary shadow-sm', 'type': 'submit' }
})
export class SubmitButtonComponent implements OnInit {

  @Input() modelId?: number;

  constructor() { }

  ngOnInit() { }
}
