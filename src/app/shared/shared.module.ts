import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActionButtonComponent } from './action-button/action-button.component';
import { CardComponent } from './card/card.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { HeadingComponent } from './heading/heading.component';
import { ModelTableComponent } from './model-table/model-table.component';


@NgModule({
  declarations: [
    ActionButtonComponent,
    CardComponent,
    FormFieldComponent,
    FooterBarComponent,
    HeadingComponent,
    ModelTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ActionButtonComponent,
    CardComponent,
    FormFieldComponent,
    FooterBarComponent,
    HeadingComponent,
    ModelTableComponent
  ]
})
export class SharedModule { }
