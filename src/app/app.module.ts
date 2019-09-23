import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideLinkBarComponent } from './side-link-bar/side-link-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LinesComponent } from './lines/lines.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { HeadingComponent } from './heading/heading.component';
import { SideLinkComponent } from './side-link/side-link.component';
import { CardComponent } from './card/card.component';
import { ModelTableComponent } from './model-table/model-table.component';

@NgModule({
  declarations: [
    AppComponent,
    SideLinkBarComponent,
    TopBarComponent,
    LinesComponent,
    FooterBarComponent,
    HeadingComponent,
    SideLinkComponent,
    CardComponent,
    ModelTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
