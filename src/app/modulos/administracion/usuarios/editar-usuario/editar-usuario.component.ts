import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { VehiculoService } from 'src/app/servicios/vehiculo.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  constructor(private fb: FormBuilder, private servicioUsuario:UsuarioService, private router: Router, private route: ActivatedRoute) { }
  id:string='';
  fgValidator: FormGroup= this.fb.group({
    'id': ['', [Validators.required]],
    'identificacion': ['', [Validators.required]],
    'nombres': ['', [Validators.required]],
    'apellidos': ['', [Validators.required]],
    'telefono': ['', [Validators.required]],
    'correo': ['', [Validators.required]],
    'clave': ['', [Validators.required]]
  })
  ngOnInit(): void {
    this.id= this.route.snapshot.params["id"];
    this.BuscarUsuario();
  }

  BuscarUsuario(){
    this.servicioUsuario.ObtenerRegistroPorId(this.id).subscribe((datos:ModeloUsuario)=>
    {
      this.fgValidator.controls["id"].setValue(this.id);
      this.fgValidator.controls["identificacion"].setValue(datos.identificacion);
      this.fgValidator.controls["nombres"].setValue(datos.nombres);
      this.fgValidator.controls["apellidos"].setValue(datos.apellidos);
      this.fgValidator.controls["telefono"].setValue(datos.telefono);
      this.fgValidator.controls["correo"].setValue(datos.correo);
      this.fgValidator.controls["clave"].setValue(datos.clave);
    });
  }

  EditarUsuario(){
    let identificacion = this.fgValidator.controls["identificacion"].value;
    let nombres = this.fgValidator.controls["nombres"].value;
    let apellidos = this.fgValidator.controls["apellidos"].value;
    let telefono = (this.fgValidator.controls["telefono"].value);
    let correo = this.fgValidator.controls["correo"].value;
    let clave = this.fgValidator.controls["clave"].value;
    let u = new ModeloUsuario();
    u.identificacion=identificacion;
    u.nombres=nombres;
    u.apellidos=apellidos;
    u.telefono=telefono;
    u.correo=correo;
    u.clave=clave;
    u.id= this.id;
    this.servicioUsuario.ActualizarUsuario(u).subscribe((datos: ModeloUsuario)=> {
      alert("Usuario actualizado correctamente!")
      this.router.navigate(["/administracion/listar-usuarios"]);
    }, (error:any)=>{
      alert("Error al actualizar el usuario")
    });
    

}

}
