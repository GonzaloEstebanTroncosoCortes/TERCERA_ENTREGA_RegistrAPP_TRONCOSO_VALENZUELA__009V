import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfil-alumno',
  templateUrl: './perfil-alumno.page.html',
  styleUrls: ['./perfil-alumno.page.scss'],
})
export class PerfilAlumnoPage implements OnInit {
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

  constructor(private menuController: MenuController,
              private router: Router,
              private alertcontroller: AlertController,
              private authService: AuthService) { }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('primero');
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

  redirigirAPaginaFija() {
    // Redirige a la página fija, cambia 'rutaFija' por la ruta de tu página
    this.router.navigateByUrl('/amburguesa');
  }

}
