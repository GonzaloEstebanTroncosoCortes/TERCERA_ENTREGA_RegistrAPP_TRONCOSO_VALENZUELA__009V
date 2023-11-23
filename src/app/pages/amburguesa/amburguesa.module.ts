import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmburguesaPageRoutingModule } from './amburguesa-routing.module';

import { AmburguesaPage } from './amburguesa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmburguesaPageRoutingModule
  ],
  declarations: [AmburguesaPage]
})
export class AmburguesaPageModule {}
