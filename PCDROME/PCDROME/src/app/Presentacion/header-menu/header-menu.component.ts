import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {ServiciosClienteService} from '../../Repositorio/Servicios/servicios-cliente.service';
import {tokenReference} from '@angular/compiler';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {
  // @ts-ignore
  public textoUsuario: string;
  public mostrarI: boolean;
  public mostrarP: boolean;
  public mostrarL: boolean;

  constructor(public sc: ServiciosClienteService) {
    this.mostrarI = true;
    this.mostrarP = false;
    this.mostrarL = false;
  }

  ngOnInit(): void {

  }

  async verificar() {
    const user = this.sc.getUid();
    if (await user == "1") {
      console.log('--> No hay una sesion iniciada');
    } else {
      this.mostrarP = true;
      this.mostrarL = true;
      this.mostrarI = false;
    }
  }

  logOut(){
    this.sc.cerrarSesion();
    this.mostrarI = true;
    this.mostrarP = false;
    this.mostrarL = false;
  }
}
