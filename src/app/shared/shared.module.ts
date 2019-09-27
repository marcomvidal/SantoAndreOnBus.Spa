import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ActionButtonComponent } from './action-button/action-button.component';
import { CardComponent } from './card/card.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { HeadingComponent } from './heading/heading.component';
import { ModelTableComponent } from './model-table/model-table.component';
import { ListOfBadgesComponent } from './list-of-badges/list-of-badges.component';
import { FormSubmitComponent } from './form-submit/form-submit.component';
import { HttpService } from './http.service';


@NgModule({
  declarations: [
    ActionButtonComponent,
    CardComponent,
    FooterBarComponent,
    HeadingComponent,
    ListOfBadgesComponent,
    ModelTableComponent,
    FormSubmitComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ActionButtonComponent,
    CardComponent,
    FooterBarComponent,
    FormSubmitComponent,
    HeadingComponent,
    ListOfBadgesComponent,
    ModelTableComponent,
  ],
  providers: [
    HttpService
  ]
})
export class SharedModule { }
