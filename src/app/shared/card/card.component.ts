import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  styles: ['card', 'shadow', 'mb-4']
})
export class CardComponent implements OnInit {

  @HostBinding('class') class = 'card shadow mb-4';
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
