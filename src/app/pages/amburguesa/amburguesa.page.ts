import { Component, OnInit } from '@angular/core';
interface Componente{
  name: string;
  redirecTo: string;
  icon:string;
}

@Component({
  selector: 'app-amburguesa',
  templateUrl: './amburguesa.page.html',
  styleUrls: ['./amburguesa.page.scss'],
})
export class AmburguesaPage implements OnInit {
  // Definimos la propiedad componentes2 como un array de cualquier tipo
  componentes: Componente[]=[
    {
      name: 'Inicio',
      redirecTo: '/inicio-alumno',
      icon: 'home'
    },
    {
      name: 'EscanearQR',
      redirecTo: '/escanear-qr',
      icon: 'qr-code'
    },
    {
      name: 'Salir',
      redirecTo: '/salir-alumno',
      icon: 'log-out'
    }

  ];

  constructor() { 
    // Inicializamos la propiedad componentes2 en el constructor
   
   
  }

  ngOnInit() {
    // Aquí puedes realizar inicializaciones adicionales si es necesario
  }

}
