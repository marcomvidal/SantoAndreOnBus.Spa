import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'list-of-badges',
  templateUrl: './list-of-badges.component.html',
  styleUrls: ['./list-of-badges.component.css'],
  host: {'class': 'col-md-12'}
})
export class ListOfBadgesComponent implements OnInit {

  @Input() items: string[];
  @Output() listUpdateEvent = new EventEmitter<string[]>();

  constructor() {}

  ngOnInit() {}

  onItemAdd(item: string): void {
    this.items.push(item);
    this.listUpdateEvent.emit(this.items);
  }

  onItemRemove(index: number): void {
    this.items.splice(index, 1);
    this.listUpdateEvent.emit(this.items);
  }
}
