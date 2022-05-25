import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlightInfoPage } from './flight-info.page';

const routes: Routes = [
  {
    path: '',
    component: FlightInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlightInfoPageRoutingModule {}
