import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { ToastController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-salir-alumno',
  templateUrl: './salir-alumno.page.html',
  styleUrls: ['./salir-alumno.page.scss'],
})
export class SalirAlumnoPage implements OnInit {

  constructor(private authService: AuthService,
              private menuController: MenuController,
              private router: Router,
              private toascontroller: ToastController) { }

  ngOnInit() {
    this.onLogout();
  }
  mostrarMenu(){
    this.menuController.open('primero');
  }
  onLogout() {
    this.authService.logout();  // Esto se encarga de limpiar los datos de la sesión.
    this.showToast('Has cerrado sesión exitosamente.');  // Esto muestra el mensaje de alerta.
    this.router.navigate(['/inicio-general']);  // Esto redirige al usuario a la página de inicio después de cerrar sesión.
  }
  async showToast(message: string) {
    const toast = await this.toascontroller.create({
      message: message,
      duration: 5000,  
      position: 'top'  
    });
  
    toast.present();
  }
  redirigirAPaginaFija() {
    // Redirige a la página fija, cambia 'rutaFija' por la ruta de tu página
    this.router.navigateByUrl('/amburguesa');
  }
}
