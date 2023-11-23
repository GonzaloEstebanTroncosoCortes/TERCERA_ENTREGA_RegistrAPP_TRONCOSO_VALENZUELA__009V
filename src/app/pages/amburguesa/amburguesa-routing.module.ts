import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmburguesaPage } from './amburguesa.page';

const routes: Routes = [
  {
    path: '',
    component: AmburguesaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmburguesaPageRoutingModule {}
