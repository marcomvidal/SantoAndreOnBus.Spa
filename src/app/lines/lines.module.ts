import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { LinesIndexComponent } from './lines-index/lines-index.component';
import { LinesFormComponent } from './lines-form/lines-form.component';
import { LinesService } from './lines.service';

@NgModule({
  declarations: [
    LinesIndexComponent,
    LinesFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    LinesIndexComponent,
    LinesFormComponent
  ],
  providers: [
    LinesService
  ]
})
export class LinesModule { }
