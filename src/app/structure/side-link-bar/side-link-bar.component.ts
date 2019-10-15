import { Component, OnInit, HostBinding } from '@angular/core';
import { LINKS } from './side-link-bar.data';
import { SideLink } from '../side-link/SideLink';

@Component({
  selector: '[side-link-bar]',
  templateUrl: './side-link-bar.component.html',
  styleUrls: ['./side-link-bar.component.css'],
  host: {'class': 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'}
})
export class SideLinkBarComponent implements OnInit {

  @HostBinding('class.toggled') isExpanded: boolean = true;
  links: SideLink[] = LINKS;

  constructor() {}

  ngOnInit() {}

  onExpand(): void {
    this.isExpanded = this.isExpanded == true ? false : true;
  }
}
