import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { DashboardIndexComponent } from './dashboard-index/dashboard-index.component';
import { DashboardService } from './dashboard.service';


@NgModule({
  declarations: [
    DashboardIndexComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    DashboardIndexComponent
  ],
  providers : [
    DashboardService
  ]
})
export class DashboardModule { }
