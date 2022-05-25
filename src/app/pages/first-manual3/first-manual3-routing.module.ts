import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstManual3Page } from './first-manual3.page';

const routes: Routes = [
  {
    path: '',
    component: FirstManual3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstManual3PageRoutingModule {}
