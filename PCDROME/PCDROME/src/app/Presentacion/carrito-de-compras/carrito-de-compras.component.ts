import { Component, OnInit } from '@angular/core';
import {ServicioComprasService} from '../../Repositorio/Servicios/servicio-compras.service';
import {ServiciosClienteService} from "../../Repositorio/Servicios/servicios-cliente.service";

@Component({
  selector: 'app-carrito-de-compras',
  templateUrl: './carrito-de-compras.component.html',
  styleUrls: ['./carrito-de-compras.component.css']
})
export class CarritoDeComprasComponent implements OnInit {
  public productos: any;
  public precioT: number;

  constructor(private serProductos: ServicioComprasService,
              public auth: ServiciosClienteService) {
    this.precioT = 0;
  }

  ngOnInit(): void {
    this.darProducto();
  }

  async darProducto(){
    console.log('load car...');
    this.productos = this.serProductos.loadCar( await this.auth.getUid());
    console.log(this.productos);
  }

}
