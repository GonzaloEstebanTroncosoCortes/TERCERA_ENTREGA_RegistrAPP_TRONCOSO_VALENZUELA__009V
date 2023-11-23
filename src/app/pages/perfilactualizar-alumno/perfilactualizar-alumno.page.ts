import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfilactualizar-alumno',
  templateUrl: './perfilactualizar-alumno.page.html',
  styleUrls: ['./perfilactualizar-alumno.page.scss'],
})
export class PerfilactualizarAlumnoPage implements OnInit {

  usuario={
    id: 0,
    username:"",
    nombre: "",
    correo: "",
    role: "",
    isactive: true,
    carrera: "",
    sede: "",
    password: "",
    confirmarPassword:"",
   }

  constructor(private authService: AuthService,
              private router: Router, 
              private alertcontroller: AlertController) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getUsuarioById(this.getIdFromUrl());
  }

  getIdFromUrl(){
    let url=this.router.url;
    let arr=url.split("/",3);
    let id = parseInt(arr[2]);
    return id;
  }

  getUsuarioById(usuarioID:number){
    this.authService.BuscarAlumnoId(usuarioID).subscribe(
      (resp:any)=>{
        this.usuario={
          id: resp[0].id,
          username: resp[0].username,
          nombre: resp[0].nombre,
          correo: resp[0].correo,
          role: resp[0].role,
          isactive: resp[0].isactive,
          carrera: resp[0].carrera,
          sede: resp[0].sede,
          password: resp[0].password,
          confirmarPassword: resp[0].confirmarPassword,
        }
      }
    )
  }

  ActualizarAlumno(){
    this.authService.ActualizarAlumno(this.usuario).subscribe();
    this.mostrarMensaje();
    this.router.navigateByUrl('/perfil-alumno');
  }
  async mostrarMensaje(){
    const alerta = await this.alertcontroller.create({
      header: 'Usuario Actualizado ',
      message: 'Su información se ha modificado ' + this.usuario.username,
      buttons: ['OK']
    });
    alerta.present();
  }


}
