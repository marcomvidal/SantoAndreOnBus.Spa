import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideLinkBarService {

  toggleSideBarEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  toggleSideBar(value: boolean) {
    this.toggleSideBarEvent.emit(value);
  }
}
