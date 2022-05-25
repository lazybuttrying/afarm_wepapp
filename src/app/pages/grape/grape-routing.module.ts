import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrapePage } from './grape.page';

const routes: Routes = [
  {
    path: '',
    component: GrapePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrapePageRoutingModule {}
