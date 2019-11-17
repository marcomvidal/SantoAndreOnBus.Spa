import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompaniesModule } from './companies/companies.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { LinesModule } from './lines/lines.module';
import { LoginModule } from './login/login.module';
import { ModelsModule } from './models/models.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { SharedModule } from './shared/shared.module';
import { StructureModule } from './structure/structure.module';
import { AuthService } from './auth/auth.service';
import { TokenInterceptorService } from './auth/token-interceptor.service';
import { AuthGuard } from './auth/auth.guard';
import { CommonComponentTasksService } from './common-component-tasks/common-component-tasks.service';


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
    LoginModule,
    ModelsModule,
    SharedModule,
    StructureModule,
    VehiclesModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
    CommonComponentTasksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
