import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarUsuarioComponent } from './usuarios/buscar-usuario/buscar-usuario.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuarios/eliminar-usuario/eliminar-usuario.component';

const routes: Routes = [
{
  path:'crear-usuario',
  component: CrearUsuarioComponent
},
{
  path:'editar-usuario',
  component: EditarUsuarioComponent
},
{
  path:'eliminar-usuario',
  component: EliminarUsuarioComponent
},
{
  path:'buscar-usuario',
  component: BuscarUsuarioComponent
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
