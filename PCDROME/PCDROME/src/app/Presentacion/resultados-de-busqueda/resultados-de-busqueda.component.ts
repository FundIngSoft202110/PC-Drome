import { Component, OnInit } from '@angular/core';
import {ServicioComprasService} from "../../Repositorio/Servicios/servicio-compras.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-resultados-de-busqueda',
  templateUrl: './resultados-de-busqueda.component.html',
  styleUrls: ['./resultados-de-busqueda.component.css']
})
export class ResultadosDeBusquedaComponent implements OnInit {

  public productosB: any[];
  public resultados: any[];
  constructor(private serProductos: ServicioComprasService, private ruta: ActivatedRoute) {
    this.productosB = [];
    this.resultados = [];
  }

  ngOnInit(): void {
    this.ruta.paramMap.subscribe(tipoP => {
      if(tipoP.has("busqueda")){
        this.buscarproductos(<string>tipoP.get("busqueda"));
      }
    });
  }

  buscarproductos(consulta: string){

    this.serProductos.buscarProducto(consulta.toUpperCase()).forEach(n => n.subscribe(c => {
      if(c.length > 0){
        c.forEach(producto => {
          this.resultados.push(producto)
        })
      }
    }));
    this.resultados = [];
  }
}
