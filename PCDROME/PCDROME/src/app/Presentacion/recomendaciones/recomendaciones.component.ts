import { Component, OnInit } from '@angular/core';
import {ServicioComprasService} from '../../Repositorio/Servicios/servicio-compras.service';
import {Pedido} from '../../nucleo/Dominio/Pedido';

@Component({
  selector: 'app-recomendaciones',
  templateUrl: './recomendaciones.component.html',
  styleUrls: ['./recomendaciones.component.css']
})
export class RecomendacionesComponent implements OnInit {
  //private pedido: Pedido;

  constructor( public carritoService: ServicioComprasService) {
  }

  ngOnInit(): void {
  }

  addCarritorecom1(){

  }

}
