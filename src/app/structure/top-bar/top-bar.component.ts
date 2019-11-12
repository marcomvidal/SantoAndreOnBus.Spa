import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  username: string;

  constructor(private service: AuthService) {
    this.username = localStorage.getItem('username');
  }

  ngOnInit() { }

  logoff(): void {
    this.service.logoff();
  }
}
