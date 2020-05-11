import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { APageRoutingModule } from './a-routing.module';

import { APage } from './a.page';
import { NgxMaskModule, IConfig } from 'ngx-mask'
export var options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    APageRoutingModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule
  ],
  declarations: [APage]
})
export class APageModule {}
