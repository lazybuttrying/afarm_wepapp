import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DroneUploadPage } from './drone-upload.page';

const routes: Routes = [
  {
    path: '',
    component: DroneUploadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DroneUploadPageRoutingModule {}
