import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouttogoComponent } from './routtogo/routtogo.component';
import { Rout2Component } from './rout2/rout2.component';
import { SesionComponent } from './sesion/sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { RegistroNutriologoComponent } from './registro-nutriologo/registro-nutriologo.component';


import { SidebarModule } from 'ng-sidebar';
import { PantallaUsuarioComponent } from './pantalla-usuario/pantalla-usuario.component';
import { PantallaNutriologoComponent } from './pantalla-nutriologo/pantalla-nutriologo.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { NotifiUsuarioComponent } from './notifi-usuario/notifi-usuario.component';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';
import { ChatUsuarioComponent } from './chat-usuario/chat-usuario.component';
import { PerfilNutriologoComponent } from './perfil-nutriologo/perfil-nutriologo.component';
import { AgendaComponent } from './agenda/agenda.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { NotinutriologoComponent } from './notinutriologo/notinutriologo.component';


@NgModule({
  declarations: [
    AppComponent,
    RouttogoComponent,
    Rout2Component,
    SesionComponent,
    RegistroComponent,
    RegistroUsuarioComponent,
    RegistroNutriologoComponent,
    PantallaUsuarioComponent,
    PantallaNutriologoComponent,
    PerfilUsuarioComponent,
    NotifiUsuarioComponent,
    SeguimientoComponent,
    ChatUsuarioComponent,
    PerfilNutriologoComponent,
    AgendaComponent,
    PacientesComponent,
    NotinutriologoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
