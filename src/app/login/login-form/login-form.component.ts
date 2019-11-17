import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Credential } from 'src/app/models/Credential';
import { FailureMessageComponent } from 'src/app/shared/failure-message/failure-message.component';
import { SuccessMessageComponent } from 'src/app/shared/success-message/success-message.component';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit  {

  isLoading: boolean = false;
  credential: Credential;
  @ViewChild(SuccessMessageComponent, { static: false }) successMessage: SuccessMessageComponent;
  @ViewChild(FailureMessageComponent, { static: false }) failureMessage: FailureMessageComponent;

  constructor(
    private router: Router,
    private service: AuthService) {
    this.credential = new Credential();
  }

  ngOnInit() { }
  
  loadData(): void { }

  async onSubmit(form: NgForm) {
    this.successMessage.onHide();
    this.failureMessage.onHide();

    this.service.login(this.credential)
      .subscribe(success => {
        this.successMessage.onShow("Você será redirecionado em instantes.");
        this.router.navigate(['/dashboard']);
      },
      fail => {
        this.isLoading = false;

        if (fail.status == 400 && typeof fail.error == "object" ) { 
          this.failureMessage.showFormErrors(fail.error.errors);
        } else if (fail.status == 400 && typeof fail.error == "string") {
          this.failureMessage.onShow(fail.error, undefined);
        } else {
          this.failureMessage.showConnectivityError();
        }
      });
  }
}