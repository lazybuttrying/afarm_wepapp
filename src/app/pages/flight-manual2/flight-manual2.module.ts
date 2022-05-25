import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlightManual2PageRoutingModule } from './flight-manual2-routing.module';

import { FlightManual2Page } from './flight-manual2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlightManual2PageRoutingModule
  ],
  declarations: [FlightManual2Page]
})
export class FlightManual2PageModule {}
