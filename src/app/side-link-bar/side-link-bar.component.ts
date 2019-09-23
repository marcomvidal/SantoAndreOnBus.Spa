import { Component, OnInit } from '@angular/core';
import { LINKS } from './side-link-bar.data';

@Component({
  selector: 'side-link-bar',
  templateUrl: './side-link-bar.component.html',
  styleUrls: ['./side-link-bar.component.css']
})
export class SideLinkBarComponent implements OnInit {

  links = LINKS;

  constructor() { }

  ngOnInit() {
  }

}
