import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ConfiguracionesComponent } from './configuraciones/configuraciones.component';
import { DeudasComponent } from './deudas/deudas.component';
import { PagosComponent } from './pagos/pagos.component';
import { AcercaComponent } from './acerca/acerca.component';


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'inicio', component:InicioComponent},
  {path:'bienvenida', component:BienvenidaComponent},
  {path:'perfil', component:PerfilComponent},
  {path:'configuraciones', component:ConfiguracionesComponent},
  {path:'deudas',component:DeudasComponent},
  {path:'pago', component:PagosComponent},
  {path:'acerca', component:AcercaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
