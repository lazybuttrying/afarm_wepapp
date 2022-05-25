import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QualityInfoPage } from './quality-info.page';

const routes: Routes = [
  {
    path: '',
    component: QualityInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QualityInfoPageRoutingModule {}
