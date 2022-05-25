import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlightInfoPageRoutingModule } from './flight-info-routing.module';

import { FlightInfoPage } from './flight-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlightInfoPageRoutingModule
  ],
  declarations: [FlightInfoPage]
})
export class FlightInfoPageModule {}
