import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'pruebamna';

    constructor( private router: Router, ) {
      
     }
  
    ngOnInit(): void {
    }

    iniciar(){
      this.router.navigateByUrl('/sesion');
    }

    registrar(){
      this.router.navigateByUrl('/registro');
    }

    pantallaUsuario(){
      this.router.navigateByUrl('/pantalla-usuario');
    }

    gotoRout(){
      this.router.navigateByUrl('/rout');
    }

    perfilUsuario(){
      this.router.navigateByUrl('/perfil-usuario');
    }

    notifiUsuario(){
      this.router.navigateByUrl('/notifi-usuario');
    }

    seguimiento(){
      this.router.navigateByUrl('/seguimiento');
    }

    chatUsuario(){
      this.router.navigateByUrl('/chat-usuario');
    }

    perfilNutriologo(){
      this.router.navigateByUrl('/perfil-nutriologo');
    }

    agenda(){
      this.router.navigateByUrl('/agenda');
    }

    pacientes(){
      this.router.navigateByUrl('/pacientes');
    }


    pantallaNutriologo(){
      this.router.navigateByUrl('/pantalla-nutriologo')
    }

    notinutriologo(){
      this.router.navigateByUrl('/notinutriologo')
    }

  }

