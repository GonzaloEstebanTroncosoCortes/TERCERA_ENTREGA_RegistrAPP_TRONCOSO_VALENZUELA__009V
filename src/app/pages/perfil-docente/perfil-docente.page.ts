import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfil-docente',
  templateUrl: './perfil-docente.page.html',
  styleUrls: ['./perfil-docente.page.scss'],
})
export class PerfilDocentePage implements OnInit {

  usuario={ 
    id: 0 ,
    username: "" ,
    correo:"",
    role: "",
    isactive: false, 
    asignatura1: "", 
    anno1: "",
    semestre1:"", 
    horaTotal1:0, 
    asignatura2:"", 
    anno2: "",
    semestre2:"", 
    horaTotal2:0,
    password: "",
    confirmarPassword:"",
  }

  constructor(private menuController: MenuController,
              private router: Router,
              private alertcontroller: AlertController,
              private authService: AuthService) { }

  ngOnInit() {
   
  }

  ionViewWillEnter(){
    this.getUsuarioById(this.getIdFromUrl());
  }
  mostrarMenu(){
    this.menuController.open('primero');
  }

  getIdFromUrl(){
    let url=this.router.url;
    let arr=url.split("/",3);
    let id = parseInt(arr[2]);
    return id;
  }

  

  getUsuarioById(usuarioID:number){
    this.authService.BuscarDocenteId(usuarioID).subscribe(
      (resp:any)=>{
        this.usuario={
          id: resp[0].id,
          username: resp[0].username,
          correo: resp[0].correo,
          role: resp[0].role,
          isactive: resp[0].isactive,
          asignatura1: resp[0].asignatura1,
          anno1: resp[0].anno1,
          semestre1: resp[0].semestre1,
          horaTotal1: resp[0].horaTotal1,
          asignatura2: resp[0].asignatura2,
          anno2: resp[0].anno2,
          semestre2: resp[0].semestre2,
          horaTotal2: resp[0].horaTotal2,
          password: resp[0].password,
          confirmarPassword: resp[0].confirmarPassword
          
        }
      }
    )
  }

}
