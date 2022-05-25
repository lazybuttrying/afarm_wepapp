import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlightManualPage } from './flight-manual.page';

const routes: Routes = [
  {
    path: '',
    component: FlightManualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlightManualPageRoutingModule {}
