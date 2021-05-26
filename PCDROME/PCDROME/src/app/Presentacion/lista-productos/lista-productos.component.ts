import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ServicioComprasService} from '../../Repositorio/Servicios/servicio-compras.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  public productos: any;

  constructor(private serProductos: ServicioComprasService, private ruta: ActivatedRoute) {}

  ngOnInit(){
    this.ruta.paramMap.subscribe(tipoP => {
      if(tipoP.has("nombre")){
        this.darProducto(<string>tipoP.get("nombre"));
      }
    });
  }

  darProducto(tipo: string){
    this.serProductos.retornarItems(tipo).subscribe(items => {
      this.productos = items
   });
  }
}
