import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioGeneralPageRoutingModule } from './inicio-general-routing.module';

import { InicioGeneralPage } from './inicio-general.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioGeneralPageRoutingModule
  ],
  declarations: [InicioGeneralPage]
})
export class InicioGeneralPageModule {}
