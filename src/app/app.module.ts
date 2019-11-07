import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompaniesModule } from './companies/companies.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { LinesModule } from './lines/lines.module';
import { ModelsModule } from './models/models.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { SharedModule } from './shared/shared.module';
import { StructureModule } from './structure/structure.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CompaniesModule,
    DashboardModule,
    HttpClientModule,
    LinesModule,
    ModelsModule,
    SharedModule,
    StructureModule,
    VehiclesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
