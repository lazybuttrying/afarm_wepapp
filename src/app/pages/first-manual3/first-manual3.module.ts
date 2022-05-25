import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstManual3PageRoutingModule } from './first-manual3-routing.module';

import { FirstManual3Page } from './first-manual3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstManual3PageRoutingModule
  ],
  declarations: [FirstManual3Page]
})
export class FirstManual3PageModule {}
