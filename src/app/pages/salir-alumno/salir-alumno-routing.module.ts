import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalirAlumnoPage } from './salir-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: SalirAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalirAlumnoPageRoutingModule {}
