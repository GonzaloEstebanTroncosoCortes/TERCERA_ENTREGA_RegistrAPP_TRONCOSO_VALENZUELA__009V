import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { IasistenciaAlumno } from '../interfaces/interfaces';
import { ApicrudService } from 'src/app/servicios/apicrud.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-escanear-qr',
  templateUrl: './escanear-qr.page.html',
  styleUrls: ['./escanear-qr.page.scss'],
})
export class EscanearQrPage implements OnInit {
  valorGuardado: any;
  nombre: any;
  newAsistenciaDocente: IasistenciaAlumno = {
    username: '',
    asignatura: '',
    fecha:''
  };

  constructor(private menuController: MenuController,
              private apicrudService: ApicrudService,
              private router: Router,
              private alertcontroller: AlertController ) { 
                this.nombre = sessionStorage.getItem('username');
              }

  ngOnInit() {
  }

  redirigirAPaginaFija() {
    // Redirige a la página fija, cambia 'rutaFija' por la ruta de tu página
    this.router.navigateByUrl('/amburguesa');
  }
  mostrarMenu(){
    this.menuController.open('primero');
    //this.menuController.open('primero');
  }

  guardarValor(item: any) {
    this.valorGuardado = item.value;
    this.newAsistenciaDocente.username = this.nombre;
    this.newAsistenciaDocente.asignatura = this.valorGuardado;
    this.newAsistenciaDocente.fecha = new Date().toISOString();
    this.apicrudService.CrearAsistenciaAlumno(this.newAsistenciaDocente).subscribe();
    this.mostrarMensaje();
    this.router.navigateByUrl('/escanear-qr');

}
async mostrarMensaje(){
  const alerta = await this.alertcontroller.create({
    header: 'Mensaje',
    message: 'Se ha generado el QR',
    buttons: ['OK']
  });
  alerta.present(); 
}
}
