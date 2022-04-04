import { NotinutriologoComponent } from './notinutriologo/notinutriologo.component';
import { NotifiUsuarioComponent } from './notifi-usuario/notifi-usuario.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { AgendaComponent } from './agenda/agenda.component';
import { PerfilNutriologoComponent } from './perfil-nutriologo/perfil-nutriologo.component';
import { ChatUsuarioComponent } from './chat-usuario/chat-usuario.component';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { PantallaNutriologoComponent } from './pantalla-nutriologo/pantalla-nutriologo.component';
import { PantallaUsuarioComponent } from './pantalla-usuario/pantalla-usuario.component';
import { RegistroNutriologoComponent } from './registro-nutriologo/registro-nutriologo.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { SesionComponent } from './sesion/sesion.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouttogoComponent } from './routtogo/routtogo.component';
import { Rout2Component } from './rout2/rout2.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  
  {path: 'rout', component: RouttogoComponent},
  {path: 'rout2', component: Rout2Component},
  {path: 'registro', component: RegistroComponent},
  {path: 'sesion', component: SesionComponent},
  {path: 'registro-usuario', component: RegistroUsuarioComponent},
  {path: 'registro-nutriologo', component: RegistroNutriologoComponent},
  {path: 'pantalla-usuario', component: PantallaUsuarioComponent},
  {path: 'pantalla-nutriologo', component: PantallaNutriologoComponent},
  {path: 'perfil-usuario', component: PerfilUsuarioComponent},
  {path: 'notifi-usuario', component: NotifiUsuarioComponent},
  {path: 'seguimiento', component: SeguimientoComponent},
  {path: 'chat-usuario', component: ChatUsuarioComponent},
  {path: 'perfil-nutriologo', component: PerfilNutriologoComponent},
  {path: 'agenda', component: AgendaComponent},
  {path: 'pacientes', component: PacientesComponent},
  {path: 'notinutriologo', component: NotinutriologoComponent},
  {path: '**', component: SesionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
