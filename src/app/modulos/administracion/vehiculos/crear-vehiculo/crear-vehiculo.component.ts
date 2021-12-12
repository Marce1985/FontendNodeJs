import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloVehiculo } from 'src/app/modelos/vehiculo.modelo';
import { VehiculoService } from 'src/app/servicios/vehiculo.service';

@Component({
  selector: 'app-crear-vehiculo',
  templateUrl: './crear-vehiculo.component.html',
  styleUrls: ['./crear-vehiculo.component.css']
})
export class CrearVehiculoComponent implements OnInit {

  constructor(private fb: FormBuilder, private servicioVehiculo:VehiculoService, private router: Router) { }
  fgValidator: FormGroup= this.fb.group({
    'marca': ['', [Validators.required]],
    'modelo': ['', [Validators.required]],
    'linea': ['', [Validators.required]],
    'precio': ['', [Validators.required]],
    'caracteristicas': ['', [Validators.required]],
    'imagen': ['', [Validators.required]]

  })
  ngOnInit(): void {
  }

  GuardarVehiculo(){
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
    this.servicioVehiculo.CrearVehiculo(p).subscribe((datos: ModeloVehiculo)=> {
      alert("Vehiculo guardado correctamente!")
      this.router.navigate(["/administracion/listar-vehiculos"]);
    }, (error:any)=>{
      alert("Error al guardar el vehiculo")
    });
    
  }

}
