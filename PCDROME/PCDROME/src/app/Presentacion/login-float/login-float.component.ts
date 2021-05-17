import { Component, OnInit } from '@angular/core';
import { ServiciosClienteService } from '../../Repositorio/Servicios/servicios-cliente.service'
@Component({
  selector: 'app-login-float',
  templateUrl: './login-float.component.html',
  styleUrls: ['./login-float.component.css']
})
export class LoginFloatComponent implements OnInit {

  constructor(private ClienteSer: ServiciosClienteService) {
     
   }

  ngOnInit(): void{
    
  }

  ingresar(email: string, contraseña: string){
    this.ClienteSer.iniciarSesion(email,contraseña);
  }
}
