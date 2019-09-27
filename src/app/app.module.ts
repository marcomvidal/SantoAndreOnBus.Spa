import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { StructureModule } from './structure/structure.module';
import { CompaniesModule } from './companies/companies.module';
import { LinesModule } from './lines/lines.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    StructureModule,
    LinesModule,
    CompaniesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
