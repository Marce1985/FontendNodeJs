import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloVehiculo } from 'src/app/modelos/vehiculo.modelo';
import { VehiculoService } from 'src/app/servicios/vehiculo.service';

@Component({
  selector: 'app-eliminar-vehiculo',
  templateUrl: './eliminar-vehiculo.component.html',
  styleUrls: ['./eliminar-vehiculo.component.css']
})
export class EliminarVehiculoComponent implements OnInit {

  constructor(private fb: FormBuilder, private servicioVehiculo:VehiculoService, private router: Router, private route: ActivatedRoute) { }
  id:string='';
  
  ngOnInit(): void {
    this.id= this.route.snapshot.params["id"];
    
    this.EliminarVehiculo()
  }

  

  EliminarVehiculo(){
    
    let p = new ModeloVehiculo();
     p.id= this.id;
    this.servicioVehiculo.EliminarVehiculo(p.id).subscribe((datos: ModeloVehiculo)=> {
      alert("Vehiculo eliminado correctamente!")
      this.router.navigate(["/administracion/listar-vehiculos"]);
    }, (error:any)=>{
      alert("Error al eliminar el vehiculo")
    });
    

}
}
