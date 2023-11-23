import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { IasistenciaDocente,IasistenciaDocentes } from '../interfaces/interfaces';
import { ApicrudService } from 'src/app/servicios/apicrud.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-generar-qr',
  templateUrl: './generar-qr.page.html',
  styleUrls: ['./generar-qr.page.scss'],
})
export class GenerarQrPage implements OnInit {
  public mensaje: string;
  data= {
    texto: ''
   }

  nombre: any;
  newAsistenciaDocente: IasistenciaDocente = {
    username: '',
    asignatura: '',
    fecha:''
  };

  constructor(private menuController: MenuController,
              private apicrudService: ApicrudService,
              private alertcontroller: AlertController,
              private router: Router) {
    this.mensaje = "Hola mundo";
    this.nombre = sessionStorage.getItem('username');
    
   }

   
  ngOnInit() {
  }

  generarQr(){
    const fechaActual = new Date().toISOString(); 
    this.mensaje = this.data.texto;
    this.newAsistenciaDocente.username= this.nombre;
    this.newAsistenciaDocente.asignatura= this.mensaje;
    this.newAsistenciaDocente.fecha= fechaActual;
    this.apicrudService.CrearAsistenciaDocente(this.newAsistenciaDocente).subscribe();
    this.mostrarMensaje();
    this.data.texto = '';
    this.router.navigateByUrl('/generar-qr');
  }

  async mostrarMensaje(){
    const alerta = await this.alertcontroller.create({
      header: 'Mensaje',
      message: 'Se ha generado el QR',
      buttons: ['OK']
    });
    alerta.present(); 
  }



  mostrarMenu(){
    this.menuController.open('primero');
  }

  obteneraAsignatura1(): string {
    const asignatura1 = sessionStorage.getItem('asignatura1');
    return asignatura1 ? asignatura1 : ''; // Si 'username' es null, retornamos una cadena vacía
  }

  obteneraAsignatura2(): string {
    const asignatura2 = sessionStorage.getItem('asignatura2');
    return asignatura2 ? asignatura2 : ''; // Si 'username' es null, retornamos una cadena vacía
  }

}
