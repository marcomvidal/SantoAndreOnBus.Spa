import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLogged: boolean;

  constructor(private service: AuthService) {
    this.isLogged = false;
  }

  ngOnInit() {
    this.service.showMenuEmitter.subscribe(isLogged => this.isLogged = isLogged);
  }
}
