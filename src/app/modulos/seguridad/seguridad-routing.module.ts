import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { IdentificacionComponent } from './identificacion/identificacion.component';

const routes: Routes = [
  {
    path:"identificar",
    component: IdentificacionComponent
  },
  {
    path:"cerrarSesion",
    component: CerrarSesionComponent

  },
  {
    path:"cambio-clave/:id",
    component: CambioClaveComponent,
    canActivate:[ValidadorSesionGuard]

  }
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
