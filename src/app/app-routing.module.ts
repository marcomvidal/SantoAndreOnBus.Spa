import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LinesIndexComponent } from './lines/lines-index/lines-index.component';
import { LinesFormComponent } from './lines/lines-form/lines-form.component';

const routes: Routes = [
  { path: '',       component: LinesIndexComponent },
  { path: 'criar',  component: LinesFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
