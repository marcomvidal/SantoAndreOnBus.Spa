import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { StructureModule } from './structure/structure.module';
import { LinesModule } from './lines/lines.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    StructureModule,
    LinesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
