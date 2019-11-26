import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'success-message',
  templateUrl: './success-message.component.html',
  styleUrls: ['./success-message.component.css']
})
export class SuccessMessageComponent implements OnInit {

  @Input() description: string;
  @Input() isHidden: boolean;

  constructor() { }

  ngOnInit() {
    this.onHide();
  }

  onHide() {
    this.isHidden = true;
  }

  onShow(description: string) {
    this.description = description;
    this.isHidden = false;
  }
}
