import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ActionButtonComponent } from './action-button/action-button.component';
import { BadgeComponent } from './badge/badge.component';
import { CardComponent } from './card/card.component';
import { DeleteButtonComponent } from './delete-button/delete-button.component';
import { EditButtonComponent } from './edit-button/edit-button.component';
import { FailureMessageComponent } from './failure-message/failure-message.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { HeadingComponent } from './heading/heading.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { ModelTableComponent } from './model-table/model-table.component';
import { ResetButtonComponent } from './reset-button/reset-button.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { SubmitButtonComponent } from './submit-button/submit-button.component';
import { SuccessMessageComponent } from './success-message/success-message.component';

import { HttpService } from './services/http.service';

@NgModule({
  declarations: [
    ActionButtonComponent,
    BadgeComponent,
    CardComponent,
    DeleteButtonComponent,
    EditButtonComponent,
    FailureMessageComponent,
    FooterBarComponent,
    HeadingComponent,
    LoadingSpinnerComponent,
    ModelTableComponent,
    SubmitButtonComponent,
    SuccessMessageComponent,
    ResetButtonComponent,
    ScoreboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ActionButtonComponent,
    BadgeComponent,
    CardComponent,
    DeleteButtonComponent,
    EditButtonComponent,
    FailureMessageComponent,
    FooterBarComponent,
    HeadingComponent,
    LoadingSpinnerComponent,
    ModelTableComponent,
    ResetButtonComponent,
    ScoreboardComponent,
    SubmitButtonComponent,
    SuccessMessageComponent
  ],
  providers: [
    HttpService
  ]
})
export class SharedModule { }
