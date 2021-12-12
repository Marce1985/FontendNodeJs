import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloVehiculo } from 'src/app/modelos/vehiculo.modelo';
import { VehiculoService } from 'src/app/servicios/vehiculo.service';

@Component({
  selector: 'app-editar-vehiculo',
  templateUrl: './editar-vehiculo.component.html',
  styleUrls: ['./editar-vehiculo.component.css']
})
export class EditarVehiculoComponent implements OnInit {

  constructor(private fb: FormBuilder, private servicioVehiculo:VehiculoService, private router: Router, private route: ActivatedRoute) { }
  id:string='';
  fgValidator: FormGroup= this.fb.group({
    'id': ['', [Validators.required]],
    'marca': ['', [Validators.required]],
    'modelo': ['', [Validators.required]],
    'linea': ['', [Validators.required]],
    'precio': ['', [Validators.required]],
    'caracteristicas': ['', [Validators.required]],
    'imagen': ['', [Validators.required]]

  })
  ngOnInit(): void {
    this.id= this.route.snapshot.params["id"];
    this.BuscarVehiculo();
  }

  BuscarVehiculo(){
    this.servicioVehiculo.ObtenerRegistroPorId(this.id).subscribe((datos:ModeloVehiculo)=>
    {
      this.fgValidator.controls["id"].setValue(this.id);
      this.fgValidator.controls["marca"].setValue(datos.marca);
      this.fgValidator.controls["modelo"].setValue(datos.modelo);
      this.fgValidator.controls["linea"].setValue(datos.linea);
      this.fgValidator.controls["precio"].setValue(datos.precio);
      this.fgValidator.controls["caracteristicas"].setValue(datos.caracteristicas);
      this.fgValidator.controls["imagen"].setValue(datos.imagen);
    });
  }

  EditarVehiculo(){
    let marca = this.fgValidator.controls["marca"].value;
    let modelo = this.fgValidator.controls["modelo"].value;
    let linea = this.fgValidator.controls["linea"].value;
    let precio = parseInt(this.fgValidator.controls["precio"].value);
    let caracteristicas = this.fgValidator.controls["caracteristicas"].value;
    let imagen = this.fgValidator.controls["imagen"].value;
    let p = new ModeloVehiculo();
    p.marca=marca;
    p.modelo=modelo;
    p.linea=linea;
    p.precio=precio;
    p.caracteristicas=caracteristicas;
    p.imagen=imagen;
    p.id= this.id;
    this.servicioVehiculo.ActualizarVehiculo(p).subscribe((datos: ModeloVehiculo)=> {
      alert("Vehiculo actualizado correctamente!")
      this.router.navigate(["/administracion/listar-vehiculos"]);
    }, (error:any)=>{
      alert("Error al actualizar el vehiculo")
    });
    

}
}