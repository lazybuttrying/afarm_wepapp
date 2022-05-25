import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QualityInfoPageRoutingModule } from './quality-info-routing.module';

import { QualityInfoPage } from './quality-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QualityInfoPageRoutingModule
  ],
  declarations: [QualityInfoPage]
})
export class QualityInfoPageModule {}
