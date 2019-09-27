import { Component, OnInit } from '@angular/core';
import { LINKS } from './side-link-bar.data';
import { SideLink } from '../side-link/SideLink';

@Component({
  selector: 'side-link-bar',
  templateUrl: './side-link-bar.component.html',
  styleUrls: ['./side-link-bar.component.css']
})
export class SideLinkBarComponent implements OnInit {

  links: SideLink[] = LINKS;

  constructor() {}

  ngOnInit() {}
}
