import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'success-message',
  templateUrl: './success-message.component.html',
  styleUrls: ['./success-message.component.css']
})
export class SuccessMessageComponent implements OnInit {

  @Input() description: string;
  isHidden: boolean = true;

  constructor() { }

  ngOnInit() {
    
  }

  show(): void {
    this.isHidden = false;
  }

  onHideButtonClick(): void {
    this.isHidden = true;
  }

}
