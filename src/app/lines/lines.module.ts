import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { LinesIndexComponent } from './lines-index/lines-index.component';
import { LinesFormComponent } from './lines-form/lines-form.component';

@NgModule({
  declarations: [
    LinesIndexComponent,
    LinesFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    LinesIndexComponent,
    LinesFormComponent
  ]
})
export class LinesModule { }
