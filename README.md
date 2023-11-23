# TERCERA_ENTREGA_RegistrAPP_TRONCOSO_VALENZUELA__009V
TERCERA ENTREGA DE PROGRAMACION MOVIL
# RegistrAPP (Basada en Ionic 6)

Este README proporciona instrucciones para configurar y ejecutar la aplicación en desarrollo de RegistraAPP, que está construida con Ionic 6. Asegúrate de seguir estos pasos para comenzar a trabajar con la aplicación.
DOCUMENTACION:https://www.npmjs.com/package/ngx-scanner-qrcode?activeTab=readme
## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes elementos en tu sistema:

- Node.js: https://nodejs.org/
- npm (Administrador de paquetes de Node.js): Viene incluido con Node.js.
- Ionic CLI (Versión 6): Para instalar, ejecuta 'npm install -g @ionic/cli@6'
- JSON SERVER:Para instalar, ejecuta 'npm install -g json-server'
- npm install ngx-scanner-qrcode@1.6.7 --save

Add wanted package to NgModule imports:

import { NgxScannerQrcodeModule, LOAD_WASM } from 'ngx-scanner-qrcode';

LOAD_WASM().subscribe((res: any) => console.log('LOAD_WASM', res));

@NgModule({
    imports: [
        NgxScannerQrcodeModule
    ]
})
angular.json

{
  "architect": {
    "build": {
      "options": {
        "assets": [
          {
            "glob": "**/*",
            "input": "node_modules/ngx-scanner-qrcode/wasm/",
            "output": "./assets/wasm/"
          }
        ]
      }
    }
  }
}

In the Component:

<!-- For camera -->
<ngx-scanner-qrcode #action="scanner"></ngx-scanner-qrcode>

<!-- data  -->
<span>{{ action.data.value | json }}</span><!-- value -->
<span>{{ action.data | async | json }}</span><!-- async -->

<!-- Loading -->
<p *ngIf="action.isLoading">⌛ Loading...</p>

<!-- start -->
<button (click)="action.isStart ? action.stop() : action.start()">{{action.isStart ? 

Para ejecutar, realizar los siguientes pasos:

1. Abrir la carpeta donde se encuentra la aplicación.
2. Ir a la carpeta src\app\data.
3. Abrir una ventana de Símbolo de sistema.
4. Verificando que se está en la carpeta DATA, ejecutar el comando 'json-server --watch personas.json --host 0.0.0.0 --port 3300'
5. Abrir otra ventana de símbolo del sistema, en la carpeta de la aplicación.
6. Ejecutar el comando 'ionic serve', esto abrirá una ventana de explorador. (SE RECOMIENDA UTILIZAR CHROME U OPERA).
7. Click derecho en 'Inspeccionar'.
8. Cambiar la vista a App Móvil.
9. Para iniciar sesión con credenciales de prueba,
Alumno
 ingresar con el usuario: 'GonzaloTroncoso' y la contraseña: '12345678'.
Profesor
 ingresar con el usuario: 'chanchito' y la contraseña: '12345678'.
