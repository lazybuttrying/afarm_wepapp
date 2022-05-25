import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstManual4Page } from './first-manual4.page';

const routes: Routes = [
  {
    path: '',
    component: FirstManual4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstManual4PageRoutingModule {}
