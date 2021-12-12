import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  constructor(private fb: FormBuilder, private servicioUsuario:UsuarioService, private router: Router) { }
  fgValidator: FormGroup= this.fb.group({
    'identificacion': ['', [Validators.required]],
    'nombres': ['', [Validators.required]],
    'apellidos': ['', [Validators.required]],
    'telefono': ['', [Validators.required]],
    'correo': ['', [Validators.required]],
    'clave': ['', [Validators.required]]

  })
  ngOnInit(): void {
  }

  GuardarUsuario(){
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
    this.servicioUsuario.CrearUsuario(u).subscribe((datos: ModeloUsuario)=> {
      alert("Usuario guardado correctamente!")
      this.router.navigate(["/administracion/listar-usuarios"]);
    }, (error:any)=>{
      alert("Error al guardar el usuarios")
    });
    

  }
}
