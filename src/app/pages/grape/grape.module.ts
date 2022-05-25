import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrapePageRoutingModule } from './grape-routing.module';

import { GrapePage } from './grape.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrapePageRoutingModule
  ],
  declarations: [GrapePage]
})
export class GrapePageModule {}
