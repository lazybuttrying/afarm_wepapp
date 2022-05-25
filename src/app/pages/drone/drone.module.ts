import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DronePageRoutingModule } from './drone-routing.module';

import { DronePage } from './drone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DronePageRoutingModule
  ],
  declarations: [DronePage]
})
export class DronePageModule {}
