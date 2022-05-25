import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstManual2Page } from './first-manual2.page';

const routes: Routes = [
  {
    path: '',
    component: FirstManual2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstManual2PageRoutingModule {}
