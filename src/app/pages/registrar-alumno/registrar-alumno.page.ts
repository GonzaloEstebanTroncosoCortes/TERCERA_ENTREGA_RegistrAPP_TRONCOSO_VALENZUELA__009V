import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { FormGroup,FormControl,FormBuilder,Validator, Validators } from '@angular/forms';
import { Ialumno } from '../interfaces/interfaces';
import { ApicrudService } from 'src/app/servicios/apicrud.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registrar-alumno',
  templateUrl: './registrar-alumno.page.html',
  styleUrls: ['./registrar-alumno.page.scss'],
})
export class RegistrarAlumnoPage implements OnInit {
  userdata: any;

  registroAlumnoForm: FormGroup;
  newAlumno : Ialumno={
    username: '',
    nombre: '',
    correo: '',
    role: '',
    isactive: false,
    carrera: '',
    sede: '',
    password: '',
    confirmarPassword: ''
  }

  constructor(private menuController: MenuController,
              private builder : FormBuilder,
              private apicrud: ApicrudService,
              private alertcontroller: AlertController,
              private router: Router,
              private authservice: AuthService,
              private toascontroller: ToastController) {
    this.registroAlumnoForm = this.builder.group({
      'username': new FormControl('', [Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d][^\s]*$/)]),
      'nombre': new FormControl('', [Validators.required,Validators.minLength(3),Validators.pattern('^[a-zA-Z ]*$')]),
      'correo': new FormControl('', [Validators.required,Validators.email]),
      'role': new FormControl('', [Validators.required,Validators.minLength(5),Validators.pattern('^[a-zA-Z ]*$')]),
      'isactive': new FormControl(false),
      'carrera': new FormControl('', [Validators.required,Validators.minLength(8),Validators.pattern('^[a-zA-Z ]*$')]),
      'sede': new FormControl('', [Validators.required,Validators.minLength(5),Validators.pattern(/^[A-Za-z]{5,}$/)]),
      'password': new FormControl('', [Validators.required,Validators.minLength(8)]),
      'confirmarPassword': new FormControl('', [Validators.required,Validators.minLength(8)])
    },{ validators: this.MustMatch('password', 'confirmarPassword') })
               }

  ngOnInit() {
  }
  redirigirAPaginaFija() {
    // Redirige a la página fija, cambia 'rutaFija' por la ruta de tu página
    this.router.navigateByUrl('/amburguesa');
  }
  checkValue(event: any): void {
    console.log('Checkbox Changed:', event.detail.checked);
    // Realiza acciones adicionales si es necesario
  }

  mostrarMenu(){
    this.menuController.open('primero');
  }



  CrearAlumno(){
    if(this.registroAlumnoForm.valid){
      this.authservice.BuscarAlumnoId(this.registroAlumnoForm.value.username).subscribe(resp=>{
        this.userdata = resp;
        if(this.userdata.length > 0){
          this.registroAlumnoForm.reset();
          this.errorDuplicidad();
        }
        else{
          this.newAlumno.username = this.registroAlumnoForm.value.username;
          this.newAlumno.nombre = this.registroAlumnoForm.value.nombre;
          this.newAlumno.correo = this.registroAlumnoForm.value.correo;
          this.newAlumno.role = this.registroAlumnoForm.value.role;
          this.newAlumno.isactive = this.registroAlumnoForm.value.isactive;
          this.newAlumno.carrera = this.registroAlumnoForm.value.carrera;
          this.newAlumno.sede = this.registroAlumnoForm.value.sede;
          this.newAlumno.password = this.registroAlumnoForm.value.password;
          this.newAlumno.confirmarPassword = this.registroAlumnoForm.value.confirmarPassword;
      
          this.apicrud.CrearAlumno(this.newAlumno).subscribe();
          this.registroAlumnoForm.reset();
          this.mostrarMensaje();
          sessionStorage.setItem('username', this.newAlumno.username);
          sessionStorage.setItem('nombre', this.newAlumno.nombre);
          sessionStorage.setItem('correo', this.newAlumno.correo);
          sessionStorage.setItem('role', this.newAlumno.role);
          sessionStorage.setItem('ingresado', 'true');
          sessionStorage.setItem('carrera', this.newAlumno.carrera);
          sessionStorage.setItem('sede', this.newAlumno.sede);
          this.showToast("Sesión iniciada correctamente...");
          this.router.navigate(['/inicio-alumno']);
        }
      })
    } 
  }
  
  async mostrarMensaje(){
    const alert = await this.alertcontroller.create({
      header: 'Registro Exitoso',
      message: 'El alumno ha sido registrado exitosamente',
      buttons: ['OK']
    });
    await alert.present();
  }

  async errorDuplicidad(){
    const alerta = await this.alertcontroller.create({
      header: 'Error..',
      message: 'Usted '+ this.newAlumno.username + ' ya esta registrado:D',
      buttons: ['OK']
    });
    alerta.present();
  }

  async showToast(msg:any){
    const toast =await this.toascontroller.create({
      message: msg,
      duration: 4000
    })//fin toast
    toast.present();
  }//fin showToast

  // Método MustMatch para verificar que las dos contraseñas sean iguales.
  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors['MustMatch']) {
        return;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ 'MustMatch': true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

}
