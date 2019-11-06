import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { StructureModule } from './structure/structure.module';
import { CompaniesModule } from './companies/companies.module';
import { LinesModule } from './lines/lines.module';
import { VehiclesModule } from './vehicles/vehicles.module';

import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    StructureModule,
    CompaniesModule,
    DashboardModule,
    LinesModule,
    VehiclesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
