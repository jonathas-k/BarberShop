import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaCadasPageRoutingModule } from './tela-cadas-routing.module';

import { TelaCadasPage } from './tela-cadas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaCadasPageRoutingModule
  ],
  declarations: [TelaCadasPage]
})
export class TelaCadasPageModule {}
