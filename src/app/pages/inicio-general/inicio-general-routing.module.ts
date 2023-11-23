import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioGeneralPage } from './inicio-general.page';

const routes: Routes = [
  {
    path: '',
    component: InicioGeneralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioGeneralPageRoutingModule {}
