import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PermitidoGuard } from './guards/permitido.guard';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'inicio-general',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'informacion',
    loadChildren: () => import('./pages/informacion/informacion.module').then( m => m.InformacionPageModule),
    canActivate: [PermitidoGuard]
  },
  {
    path: 'feriados',
    loadChildren: () => import('./pages/feriados/feriados.module').then( m => m.FeriadosPageModule),
    
  },
  {
    path: 'salir',
    loadChildren: () => import('./pages/salir/salir.module').then( m => m.SalirPageModule),
    canActivate: [PermitidoGuard]
  },
  {
    path: 'registrar-alumno',
    loadChildren: () => import('./pages/registrar-alumno/registrar-alumno.module').then( m => m.RegistrarAlumnoPageModule)
  },
  {
    path: 'perfil-docente/:id',
    loadChildren: () => import('./pages/perfil-docente/perfil-docente.module').then( m => m.PerfilDocentePageModule)
  },
  {
    path: 'perfil-alumno/:id',
    loadChildren: () => import('./pages/perfil-alumno/perfil-alumno.module').then( m => m.PerfilAlumnoPageModule)
  },
  {
    path: 'generar-qr',
    loadChildren: () => import('./pages/generar-qr/generar-qr.module').then( m => m.GenerarQrPageModule),
    canActivate: [PermitidoGuard]
  },
  {
    path: 'escanear-qr',
    loadChildren: () => import('./pages/escanear-qr/escanear-qr.module').then( m => m.EscanearQrPageModule)
  },
  {
    path: 'amburguesa',
    loadChildren: () => import('./pages/amburguesa/amburguesa.module').then( m => m.AmburguesaPageModule)
  },
  {
    path: 'inicio-alumno',
    loadChildren: () => import('./pages/inicio-alumno/inicio-alumno.module').then( m => m.InicioAlumnoPageModule)
  },
  {
    path: 'perfilactualizar-docente/:id',
    loadChildren: () => import('./pages/perfilactualizar-docente/perfilactualizar-docente.module').then( m => m.PerfilactualizarDocentePageModule)
  },
  {
    path: 'perfilactualizar-alumno/:id',
    loadChildren: () => import('./pages/perfilactualizar-alumno/perfilactualizar-alumno.module').then( m => m.PerfilactualizarAlumnoPageModule)
  },
  {
    path: 'inicio-general',
    loadChildren: () => import('./pages/inicio-general/inicio-general.module').then( m => m.InicioGeneralPageModule)
  },
  {
    path: 'salir-alumno',
    loadChildren: () => import('./pages/salir-alumno/salir-alumno.module').then( m => m.SalirAlumnoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
