import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-inicio-alumno',
  templateUrl: './inicio-alumno.page.html',
  styleUrls: ['./inicio-alumno.page.scss'],
})
export class InicioAlumnoPage implements OnInit {


  numero : any;

  constructor( private router: Router,
               public authService: AuthService
                ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.numero = sessionStorage.getItem('id');
  }
  redirigirAPaginaFija() {
    // Redirige a la página fija, cambia 'rutaFija' por la ruta de tu página
    this.router.navigateByUrl('/amburguesa');
  }
  estaLogueado(): boolean {
    return this.authService.EstaLogueado();
  }
  
  obtenerNombreUsuario(): string {
    const username = sessionStorage.getItem('username');
    return username ? username : ''; // Si 'username' es null, retornamos una cadena vacía
  }
}
