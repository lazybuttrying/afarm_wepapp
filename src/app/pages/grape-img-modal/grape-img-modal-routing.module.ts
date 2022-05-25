import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrapeImgModalPage } from './grape-img-modal.page';

const routes: Routes = [
  {
    path: '',
    component: GrapeImgModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrapeImgModalPageRoutingModule {}
