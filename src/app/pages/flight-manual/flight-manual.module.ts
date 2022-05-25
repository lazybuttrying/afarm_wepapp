import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlightManualPageRoutingModule } from './flight-manual-routing.module';

import { FlightManualPage } from './flight-manual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlightManualPageRoutingModule
  ],
  declarations: [FlightManualPage]
})
export class FlightManualPageModule {}
