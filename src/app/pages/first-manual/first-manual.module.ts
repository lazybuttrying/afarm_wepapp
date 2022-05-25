import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstManualPageRoutingModule } from './first-manual-routing.module';

import { FirstManualPage } from './first-manual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstManualPageRoutingModule
  ],
  declarations: [FirstManualPage]
})
export class FirstManualPageModule {}
