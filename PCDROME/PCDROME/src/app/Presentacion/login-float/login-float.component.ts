import { Component, OnInit } from '@angular/core';
import { ServiciosClienteService } from '../../Repositorio/Servicios/servicios-cliente.service';
import {Router} from '@angular/router';
import {HeaderMenuComponent} from "../header-menu/header-menu.component";

@Component({
  selector: 'app-login-float',
  templateUrl: './login-float.component.html',
  styleUrls: ['./login-float.component.css']
})
export class LoginFloatComponent implements OnInit {

  constructor(private ClienteSer: ServiciosClienteService,
              public router: Router) {
   }

  ngOnInit(): void{
  }

  // tslint:disable-next-line:typedef
  async ingresar(email: string, contraseña: string){
    const aux = this.ClienteSer.iniciarSesion(email, contraseña);
    console.log('Fin');
    aux.then( (userCredential) => {
      this.router.navigate(['/']);
    }).catch((error) => {
      console.log('Error: ');
      console.log(error.message);
      console.log(error.code);
    });
  }
}
