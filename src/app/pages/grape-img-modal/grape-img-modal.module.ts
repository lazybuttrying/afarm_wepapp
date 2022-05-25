import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GrapeImgModalPageRoutingModule } from './grape-img-modal-routing.module';

import { GrapeImgModalPage } from './grape-img-modal.page';

const routes: Routes = [{ path: '', component: GrapeImgModalPage }];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [GrapeImgModalPage],
})
export class GrapeImgModalPageModule {}
