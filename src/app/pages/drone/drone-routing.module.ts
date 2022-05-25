import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DronePage } from './drone.page';

const routes: Routes = [
  {
    path: '',
    component: DronePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DronePageRoutingModule {}
