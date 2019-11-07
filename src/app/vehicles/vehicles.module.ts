import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { VehiclesIndexComponent } from './vehicles-index/vehicles-index.component';
import { VehiclesService } from './vehicles.service';


@NgModule({
  declarations: [VehiclesIndexComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    VehiclesIndexComponent
  ],
  providers: [
    VehiclesService
  ]
})
export class VehiclesModule {}
