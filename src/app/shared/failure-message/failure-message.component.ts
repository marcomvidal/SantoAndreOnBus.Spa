import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'failure-message',
  templateUrl: './failure-message.component.html',
  styleUrls: ['./failure-message.component.css']
})
export class FailureMessageComponent implements OnInit {

  @Input() description: string;
  @Input() isHidden: boolean;

  constructor() {}

  ngOnInit() {
    this.onHide();
  }

  onHide(): void {
    this.isHidden = true;
  }

  onShow(description: string): void {
    this.description = description;
    this.isHidden = false;
  }
}
