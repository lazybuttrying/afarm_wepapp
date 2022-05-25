import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstManual4PageRoutingModule } from './first-manual4-routing.module';

import { FirstManual4Page } from './first-manual4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstManual4PageRoutingModule
  ],
  declarations: [FirstManual4Page]
})
export class FirstManual4PageModule {}
