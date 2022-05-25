import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstManual2PageRoutingModule } from './first-manual2-routing.module';

import { FirstManual2Page } from './first-manual2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstManual2PageRoutingModule
  ],
  declarations: [FirstManual2Page]
})
export class FirstManual2PageModule {}
