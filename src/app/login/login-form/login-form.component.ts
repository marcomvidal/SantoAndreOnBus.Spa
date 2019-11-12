import { Component, OnInit, ViewChild, ɵConsole } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Credential } from 'src/app/models/Credential';
import { FailureMessageComponent } from 'src/app/shared/failure-message/failure-message.component';
import { AuthService } from 'src/app/auth/auth.service';
import { SuccessMessageComponent } from 'src/app/shared/success-message/success-message.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  isLoading: boolean = false;
  credential: Credential;
  @ViewChild(SuccessMessageComponent, { static: false }) successMessage: SuccessMessageComponent;
  @ViewChild(FailureMessageComponent, { static: false }) failureMessage: FailureMessageComponent;

  constructor(private router: Router, private service: AuthService) {
    this.credential = new Credential();
  }

  ngOnInit() { }

  async onSubmit(form: NgForm) {
    this.successMessage.onHide();
    this.failureMessage.onHide();

    this.commitChangesAndFeedback({
      transactions: async () => await this.service.login(this.credential),
      onSuccess: () => {
        this.successMessage.onShow("Você será redirecionado em instantes.");
        this.router.navigate(['/dashboard']);
      }
    });
  }

  private async commitChangesAndFeedback(
    { transactions, onSuccess }:
      { transactions: () => Promise<Object>, onSuccess: () => void }) {
    try {
      this.isLoading = true;
      await transactions();
      onSuccess();
      window.scrollTo(0, 0);
    } catch (e) {
      this.isLoading = false;

      if (e.status == 400 && typeof e.error == "object" ) { 
        this.failureMessage.showFormErrors(e.error.errors);
      } else if (e.status == 400 && typeof e.error == "string") {
        this.failureMessage.onShow(e.error, undefined);
      } else { this.failureMessage.showConnectivityError(); }
    }
  }
}
