import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  username: string = "";
  
  numero : any;

  constructor(private menuController: MenuController,
              private route: ActivatedRoute,
              public authService: AuthService ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['username']) {
        this.username = params['username'];
        console.log(this.username);
      }
    });
  }

  ionViewWillEnter(){
    this.numero = sessionStorage.getItem('id');
  }

  //el metodo menuController.open es el que se encarga de abrir y cerrar el menu lateral lo implementamos

  mostrarMenu(){
    this.menuController.open('primero');
  }
  estaLogueado(): boolean {
    return this.authService.EstaLogueado();
  }
  
  obtenerNombreUsuario(): string {
    const username = sessionStorage.getItem('username');
    return username ? username : ''; // Si 'username' es null, retornamos una cadena vacía
  }
  
}
