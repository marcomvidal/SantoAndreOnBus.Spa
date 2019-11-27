import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { SideLinkBarService } from '../side-link-bar/side-link-bar.service';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  username: string;

  constructor(private service: AuthService, private sideBarService: SideLinkBarService) {
    this.username = localStorage.getItem('username');
  }

  ngOnInit() { }

  logoff() {
    this.service.logoff();
  }

  toggleSideBar() {
    this.sideBarService.toggleSideBar(true);
  }
}
