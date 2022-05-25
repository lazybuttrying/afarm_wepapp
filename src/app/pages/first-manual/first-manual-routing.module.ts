import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstManualPage } from './first-manual.page';

const routes: Routes = [
  {
    path: '',
    component: FirstManualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstManualPageRoutingModule {}
