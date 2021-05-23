import { Component, OnInit } from '@angular/core';
import {ServiciosClienteService} from '../../Repositorio/Servicios/servicios-cliente.service';
import {HeaderMenuComponent} from '../header-menu/header-menu.component';

@Component({
  selector: 'app-register-float',
  templateUrl: './register-float.component.html',
  styleUrls: ['./register-float.component.css']
})
export class RegisterFloatComponent implements OnInit {

  constructor(public clienteSer: ServiciosClienteService) { }

  ngOnInit(): void {
  }

  registrar(email: string, password: string, nombre: string, telefono: string, pass2: string){
    if (password == pass2 ){
      this.clienteSer.registrarse(email, password, nombre, telefono);
    }else{
      console.log('Las contraseñas son diferentes');
    }
    /*console.log('Nombre: ', nombre);
    console.log('Email: ', email);
    console.log('Contra: ', password);
    console.log('Contra2: ', pass2);
    console.log('Tel: ', telefono);*/
  }
}
