import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent implements OnInit {

  @Input() item: string;
  @Output() removeEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  onRemove(): void {
    this.removeEvent.emit(this.item);
  }
}
