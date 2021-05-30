import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {ServiciosClienteService} from '../../Repositorio/Servicios/servicios-cliente.service';
import {tokenReference} from '@angular/compiler';
import {Router, NavigationEnd} from "@angular/router";
import {FormBuilder} from "@angular/forms";

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
  private busqueda: string;

  constructor(public sc: ServiciosClienteService,
              public router: Router,public form: FormBuilder) {
    this.busqueda = '';
    this.mostrarI = true;
    this.mostrarP = false;
    this.mostrarL = false;
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) { this.verificar(); }
    });
  }

  ngOnInit(): void {
  }

  formulario = this.form.group({
    busqueda: ['']
  })

  async verificar() {
    const user = await this.sc.getUid();
    if (user === '1') {
      this.mostrarI = true;
      this.mostrarP = false;
      this.mostrarL = false;
      console.log('--> No hay una sesion iniciada');
    } else {
      console.log('--> Si hay una sesion iniciada');
      this.mostrarP = true;
      this.mostrarL = true;
      this.mostrarI = false;
    }
  }

  logOut(){
    this.mostrarI = true;
    this.mostrarP = false;
    this.mostrarL = false;
    this.sc.cerrarSesion().then((userCredential) => {
      this.router.navigate(['/']);
    }).catch((error) => {
      console.log('Error: ');
      console.log(error.message);
      console.log(error.code);
    });
  }
  buscar(){
    this.router.navigate(['Buscar',this.formulario.value.busqueda]);
  }

}
