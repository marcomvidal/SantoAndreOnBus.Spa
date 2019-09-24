import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.css']
})
export class ActionButtonComponent implements OnInit {

  @Input() icon: string;
  @Input() visibleText: string;

  constructor() { }

  ngOnInit() {
  }

}
