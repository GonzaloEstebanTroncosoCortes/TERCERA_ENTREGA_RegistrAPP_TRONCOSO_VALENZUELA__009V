import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalirAlumnoPageRoutingModule } from './salir-alumno-routing.module';

import { SalirAlumnoPage } from './salir-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalirAlumnoPageRoutingModule
  ],
  declarations: [SalirAlumnoPage]
})
export class SalirAlumnoPageModule {}
