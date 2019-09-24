import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    IndexComponent
  ]
})
export class LinesModule { }
