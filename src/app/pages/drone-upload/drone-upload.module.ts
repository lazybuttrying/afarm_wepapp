import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DroneUploadPageRoutingModule } from './drone-upload-routing.module';

import { DroneUploadPage } from './drone-upload.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DroneUploadPageRoutingModule
  ],
  declarations: [DroneUploadPage]
})
export class DroneUploadPageModule {}
