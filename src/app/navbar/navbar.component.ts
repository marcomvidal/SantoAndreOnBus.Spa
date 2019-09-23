import { Component, OnInit } from '@angular/core';
import { LINKS } from './links-data';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  links = LINKS;

  constructor() { }

  ngOnInit() {
  }

}
