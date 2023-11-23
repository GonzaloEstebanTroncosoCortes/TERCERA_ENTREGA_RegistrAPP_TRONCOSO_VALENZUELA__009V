import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  userdata: any;
  usuario ={
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
  userdatadocente: any;
  usuarioDocente ={
  
    id: 0 ,
    username: "" ,
    correo:"",
    role: "",
    isactive: true, 
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
  
  constructor(private authservice: AuthService, 
              private router: Router,
              private alertcontroller: AlertController,
              private toascontroller: ToastController,
              private builder : FormBuilder,
              private menuController: MenuController) { 
                this.loginForm=this.builder.group({ 
                  'role': new FormControl("",Validators.required), // Usa la función de validación aquí.
                  'username' : new FormControl("",[Validators.required, Validators.minLength(8)]),
                  'password' : new FormControl("", [Validators.required, Validators.minLength(8)])
                })
              }



  ngOnInit() {
    if (this.estaLogueado()) {
      this.mostrarAlertaYaAutenticado()
  }
}

//------------------------------------------------------
login(){
    console.log("Codificando login de acceso");
    if (this.loginForm.valid){
      //pregunto si el rol es estudiante o docente
      if(this.loginForm.value.role==="estudiante"){
        //invocamos al servicio, enviamos el parámetro username
        this.authservice.GetUserByIdAlumnos(this.loginForm.value.username).subscribe(resp=>{
          this.userdata =resp;
          console.log(this.userdata);
  
          if (this.userdata.length>0){    //si length es mayor a cero, encontramos el objeto con su username
              this.usuario={
                id: this.userdata[0].id,
                username: this.userdata[0].username,
                nombre: this.userdata[0].nombre,
                correo: this.userdata[0].correo,
                role: this.userdata[0].role,
                isactive: this.userdata[0].isactive,
                carrera: this.userdata[0].carrera,
                sede: this.userdata[0].sede,
                password: this.userdata[0].password,
                confirmarPassword: this.userdata[0].confirmarPassword
                
              }//fin usuario
              if (this.usuario.password===this.loginForm.value.password){
                if (this.usuario.isactive){
                  //iniciamos sesión
                  sessionStorage.setItem('id',this.usuario.id.toString()); 
                  sessionStorage.setItem('username', this.usuario.username);
                  sessionStorage.setItem('nombre', this.usuario.nombre);
                  sessionStorage.setItem('correo', this.usuario.correo);
                  sessionStorage.setItem('role', this.usuario.role);
                  sessionStorage.setItem('ingresado', 'true');
                  sessionStorage.setItem('carrera', this.usuario.carrera);
                  sessionStorage.setItem('sede', this.usuario.sede);
                  this.showToast("Sesión iniciada correctamente...");
                  this.router.navigateByUrl("/inicio");
                  this.router.navigate(['/inicio-alumno'], { queryParams: { username: this.usuario.username } });
                  
                }//fin if isactive
                else{
                  this.NoActivo()
                  this.loginForm.reset();
                }
              }//fin if password
              else{
                this.ErrorPassword();
                this.loginForm.reset();
              }
          }//if  del lenght  (this.userdata.length>0) no encontró el usuario
          else{
            this.NoExiste();
            this.loginForm.reset();
          }
         })//fin subscribe
      }//fin if estudiante
      else{
        //invocamos al servicio, enviamos el parámetro username
        this.authservice.GetUserByIdDocentes(this.loginForm.value.username).subscribe(resp=>{
          this.userdatadocente =resp;
          console.log(this.userdatadocente);
  
          if (this.userdatadocente.length>0){    //si length es mayor a cero, encontramos el objeto con su username
              this.usuarioDocente={
                id: this.userdatadocente[0].id,
                username: this.userdatadocente[0].username,
                correo: this.userdatadocente[0].correo,
                role: this.userdatadocente[0].role,
                isactive: this.userdatadocente[0].isactive,
                asignatura1: this.userdatadocente[0].asignatura1,
                anno1: this.userdatadocente[0].anno1,
                semestre1: this.userdatadocente[0].semestre1,
                horaTotal1: this.userdatadocente[0].horaTotal1,
                asignatura2: this.userdatadocente[0].asignatura2,
                anno2: this.userdatadocente[0].anno2,
                semestre2: this.userdatadocente[0].semestre2,
                horaTotal2: this.userdatadocente[0].horaTotal2,
                password: this.userdatadocente[0].password,
                confirmarPassword: this.userdatadocente[0].confirmarPassword
                
              }//fin usuario
              if (this.usuarioDocente.password===this.loginForm.value.password){
                if (this.usuarioDocente.isactive){
                  //iniciamos sesión 
                  sessionStorage.setItem('id',this.usuarioDocente.id.toString());
                  sessionStorage.setItem('username', this.usuarioDocente.username);
                  sessionStorage.setItem('correo', this.usuarioDocente.correo);
                  sessionStorage.setItem('role', this.usuarioDocente.role);
                  sessionStorage.setItem('ingresado', 'true');
                  sessionStorage.setItem('asignatura1', this.usuarioDocente.asignatura1);
                  sessionStorage.setItem('anno1', this.usuarioDocente.anno1);
                  sessionStorage.setItem('semestre1', this.usuarioDocente.semestre1);
                  sessionStorage.setItem('horaTotal1', this.usuarioDocente.horaTotal1.toString());
                  sessionStorage.setItem('asignatura2', this.usuarioDocente.asignatura2);
                  sessionStorage.setItem('anno2', this.usuarioDocente.anno2);
                  sessionStorage.setItem('semestre2', this.usuarioDocente.semestre2);
                  sessionStorage.setItem('horaTotal2', this.usuarioDocente.horaTotal2.toString());
                  this.showToast("Sesión iniciada correctamente...");
                  this.router.navigateByUrl("/inicio");
                  this.router.navigate(['/inicio'], { queryParams: { username: this.usuarioDocente.username } });
                  
                }//fin if isactive
                else{
                  this.NoActivo()
                  this.loginForm.reset();
                }
              }//fin if password
              else{
                this.ErrorPassword();
                this.loginForm.reset();
              }
          }//if  del lenght  (this.userdata.length>0) no encontró el usuario
          else{
            this.NoExiste();
            this.loginForm.reset();
          }
         })//fin subscribe
      }//fin else docente

     
    }
  }//fin login

//----------------------------------------------------------------
  

  async showToast(msg:any){
    const toast =await this.toascontroller.create({
      message: msg,
      duration: 4000
    })//fin toast
    toast.present();
  }//fin showToast

//muestra mensaje de usuario no activo
  async NoActivo(){
    const alerta = await this.alertcontroller.create({
      header: "Usuario no activo",
      message: "El usuario no está activo, contacte al administrador admin@uc.cl",
      buttons: ["OK"]
    })
    alerta.present();
    return;
  }
  async ErrorPassword(){
    const alerta = await this.alertcontroller.create({
      header: "Error de contraseña",
      message: "La contraseña no es correcta, intente nuevamente...",
      buttons: ["OK"]
    })
    alerta.present();
    return;
  }

  async NoExiste(){
    const alerta = await this.alertcontroller.create({
      header: "Usuario no existe",
      message: "El usuario no existe, Debe registrarse...",
      buttons: ["OK"]
    })
    alerta.present();
    return;
  }
  onLogout() {
    this.authservice.logout();
  }

  estaLogueado(): boolean {
    return this.authservice.EstaLogueado();
  }

  async mostrarAlertaYaAutenticado() {
    const alerta = await this.alertcontroller.create({
      header: "Sesión Activa",
      message: "Ya has iniciado sesión. desera cerrar secion. ¿Deseas cerrar seccion?",
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Ir al inicio',
          handler: () => {
            this.router.navigateByUrl("/salir"); // Navegar al inicio o la página que consideres oportuna.
          }
        }
      ]
    });
    await alerta.present();
  }

  mostrarMenu(){
    this.menuController.open('primero');
  }
}//fin clase
