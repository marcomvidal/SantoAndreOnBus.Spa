import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompaniesIndexComponent } from './companies/companies-index/companies-index.component';
import { LinesIndexComponent } from './lines/lines-index/lines-index.component';
import { LinesFormComponent } from './lines/lines-form/lines-form.component';
import { VehiclesIndexComponent } from './vehicles/vehicles-index/vehicles-index.component';
import { DashboardIndexComponent } from './dashboard/dashboard-index/dashboard-index.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  { path: 'login',            component: LoginFormComponent },
  { path: 'dashboard',        component: DashboardIndexComponent, canActivate: [AuthGuard] },
  { path: 'linhas',           component: LinesIndexComponent,     canActivate: [AuthGuard] },
  { path: 'linhas/criar',     component: LinesFormComponent,      canActivate: [AuthGuard] },
  { path: 'linhas/:lineName', component: LinesFormComponent,      canActivate: [AuthGuard] },
  { path: 'empresas',         component: CompaniesIndexComponent, canActivate: [AuthGuard] },
  { path: 'veiculos',         component: VehiclesIndexComponent,  canActivate: [AuthGuard] },
  { path: '',                 redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
