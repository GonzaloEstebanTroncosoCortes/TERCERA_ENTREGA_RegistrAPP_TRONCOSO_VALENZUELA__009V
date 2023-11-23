import { Component, OnInit } from '@angular/core';
import { Idocente } from '../interfaces/interfaces';
import { ApicrudService } from 'src/app/servicios/apicrud.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { FormBuilder, Validators, FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  registrarForm: FormGroup;
  newUsuario: Idocente = {
    username: '',
    correo: '',
    role: '',
    isactive: false,
    asignatura1: '',
    anno1: '',
    semestre1: '',
    horaTotal1: 0,
    asignatura2: '',
    anno2: '',
    semestre2: '',
    horaTotal2: 0,
    password: '',
    confirmarPassword: ''
  }
  constructor(
    private authservice: AuthService,
    private apicrud: ApicrudService,
    private router: Router,
    private alertcontroller: AlertController,
    private toascontroller: ToastController,
    private menuController: MenuController,
    private builder : FormBuilder
  ) {
    this.registrarForm = this.builder.group({ 
      username: ["", [Validators.required, Validators.minLength(8),Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d][^\s]*$/)]],
      correo: ["", [Validators.required, Validators.email]],
      role: ["", [Validators.required, Validators.minLength(5)]],
      isactive: [false],
      asignatura1: ["", [Validators.required, Validators.minLength(5),Validators.pattern(/^[A-Za-z0-9 ]+$/)]],
      anno1: ["", [Validators.required, Validators.minLength(4)]],
      semestre1: ["", [Validators.required, Validators.maxLength(1)]],
      horaTotal1: ["", [Validators.required, this.rangoValido]], // Usa la función de validación aquí.
      asignatura2: ["", [Validators.required, Validators.minLength(5)]],
      anno2: ["", [Validators.required, Validators.minLength(4)]],
      semestre2: ["", [Validators.required, Validators.maxLength(1)]],
      horaTotal2: ["", [Validators.required, this.rangoValido]], // Usa la función de validación aquí.
      password: ["", [Validators.required, Validators.minLength(8)]],
      confirmarPassword: ["", [Validators.required, Validators.minLength(8)]],
    }, { validators: this.MustMatch('password', 'confirmarPassword') });
  }

  ngOnInit() {}

  checkValue(event: any): void {
    console.log('Checkbox Changed:', event.detail.checked);
    // Realiza acciones adicionales si es necesario
  }
  mostrarMenu() {
    this.menuController.open('primero');
  }



  CrearDocente() {
    if (this.registrarForm.valid) {
      console.log("Creando docente con el siguiente valor:", this.registrarForm.value);
      this.newUsuario.username = this.registrarForm.value.username;
      this.newUsuario.correo = this.registrarForm.value.correo;
      this.newUsuario.role = this.registrarForm.value.role;
      this.newUsuario.isactive = this.registrarForm.value.isactive;
      this.newUsuario.asignatura1 = this.registrarForm.value.asignatura1;
      this.newUsuario.anno1 = this.registrarForm.value.anno1;
      this.newUsuario.semestre1 = this.registrarForm.value.semestre1;
      this.newUsuario.horaTotal1 = this.registrarForm.value.horaTotal1;
      this.newUsuario.asignatura2 = this.registrarForm.value.asignatura2;
      this.newUsuario.anno2 = this.registrarForm.value.anno2;
      this.newUsuario.semestre2 = this.registrarForm.value.semestre2;
      this.newUsuario.horaTotal2 = this.registrarForm.value.horaTotal2;
      this.newUsuario.password = this.registrarForm.value.password;
      this.newUsuario.confirmarPassword = this.registrarForm.value.confirmarPassword;


      this.apicrud.CrearDocente(this.newUsuario).subscribe(
        response => {
          console.log("Respuesta del servidor:", response);
          this.router.navigateByUrl('/inicio-general');
          this.showToast("!!Por favor Inicie seccion!!...");
        },
        error => {
          console.error("Hubo un error al crear el docente:", error);
        }
      );
    } else {
      console.error("El formulario no es válido");
      // Aquí podrías mostrar un mensaje o realizar alguna acción cuando el formulario no sea válido.
    }
  }

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

  // Función de validación para el rango de horas.
  private rangoValido(control: AbstractControl): { [key: string]: boolean } | null {
    const valor = control.value;
    if (valor !== null && (isNaN(valor) || valor < 0 || valor > 20)) {
      return { 'rangoInvalido': true };
    }
    return null;
  }
  async showToast(msg:any){
    const toast =await this.toascontroller.create({
      message: msg,
      duration: 4000
    })//fin toast
    toast.present();
  }//fin showToast

}
