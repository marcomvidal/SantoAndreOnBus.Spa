import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CompaniesIndexComponent } from './companies-index/companies-index.component';
import { CompaniesService } from './companies.service';


@NgModule({
  declarations: [CompaniesIndexComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    CompaniesIndexComponent
  ],
  providers: [
    CompaniesService
  ]
})
export class CompaniesModule { }
