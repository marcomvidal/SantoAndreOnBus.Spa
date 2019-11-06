import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompaniesIndexComponent } from './companies/companies-index/companies-index.component';
import { LinesIndexComponent } from './lines/lines-index/lines-index.component';
import { LinesFormComponent } from './lines/lines-form/lines-form.component';
import { VehiclesIndexComponent } from './vehicles/vehicles-index/vehicles-index.component';


const routes: Routes = [
  { path: 'linhas',         component: LinesIndexComponent },
  { path: 'linhas/criar',   component: LinesFormComponent },
  { path: 'linhas/:lineName',     component: LinesFormComponent },
  { path: 'empresas',       component: CompaniesIndexComponent },
  { path: 'veiculos',       component: VehiclesIndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
