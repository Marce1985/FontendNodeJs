import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentaRoutingModule } from './venta-routing.module';
import { AsignarVentaComponent } from './asignar-venta/asignar-venta.component';


@NgModule({
  declarations: [
    AsignarVentaComponent
  ],
  imports: [
    CommonModule,
    VentaRoutingModule
  ]
})
export class VentaModule { }
