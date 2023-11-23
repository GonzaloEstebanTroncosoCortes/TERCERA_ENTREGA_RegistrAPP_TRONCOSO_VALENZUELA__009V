import { Component } from '@angular/core';

interface Componente {
  name: string;
  redirecTo: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes: Componente[] = [

    {
      name: 'Inicio',
      redirecTo: '/inicio',
      icon: 'home'
    },
    {
      name: 'Informacion',
      redirecTo: '/informacion',
      icon: 'information-circle'
    },
    {
      name: 'Feriados',
      redirecTo: '/feriados',
      icon: 'calendar'
    },
    {
      name: 'GenerarQR',
      redirecTo: '/generar-qr',
      icon: 'calendar'
    },
    {
      name: 'Salir',
      redirecTo: '/salir',
      icon: 'log-out'
    }

  ];
  
  
  
}
