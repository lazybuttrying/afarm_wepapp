import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlightManual2Page } from './flight-manual2.page';

const routes: Routes = [
  {
    path: '',
    component: FlightManual2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlightManual2PageRoutingModule {}
