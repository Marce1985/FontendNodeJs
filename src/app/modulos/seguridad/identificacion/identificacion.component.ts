import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {

  fgValidator: FormGroup =this.fb.group({
    'usuario':['',[Validators.required, Validators.email]],
    'clave':['',[Validators.required]]

  });
  constructor(private fb:FormBuilder, private servicioSeguridad: SeguridadService, private router: Router)  {
    
   }

  ngOnInit(): void {
    
    
  }
  identificarUsuario(){
    let usuario = this.fgValidator.controls["usuario"].value;
    let clave = this.fgValidator.controls["clave"].value;     
    let claveCifrada = CryptoJS.MD5(clave).toString();  
    this.servicioSeguridad.Identificar(usuario, claveCifrada).subscribe((datos:any) => {
      //OK
      alert("Datos correctos")
      this.servicioSeguridad.AlmacenarSesion(datos);
      this.router.navigate(["/inicio"]);
      
    },(error:any)=>{
      alert("Datos inválidos")
    })
  }

}
