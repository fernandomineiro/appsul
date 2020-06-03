import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BPageRoutingModule } from './b-routing.module';

import { BPage } from './b.page';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BPageRoutingModule,
    HttpClientModule
  ],
  declarations: [BPage]
})
export class BPageModule {}
