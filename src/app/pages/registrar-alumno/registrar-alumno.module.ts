import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarAlumnoPageRoutingModule } from './registrar-alumno-routing.module';

import { RegistrarAlumnoPage } from './registrar-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RegistrarAlumnoPageRoutingModule
  ],
  declarations: [RegistrarAlumnoPage]
})
export class RegistrarAlumnoPageModule {}
