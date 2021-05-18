import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ServicioComprasService} from '../../Repositorio/Servicios/servicio-compras.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  private categoriaP: any;
  public productos: any;

  constructor(private serProductos: ServicioComprasService, private ruta: ActivatedRoute) {
    
    this.ruta.paramMap.subscribe(nombre => this.categoriaP = nombre);
    if(this.categoriaP.params.nombre.search("CPU") == 0){
      this.darProducto("CPU");
    }
    if(this.categoriaP.params.nombre.search("RAM") == 0){
      this.darProducto("RAM");
    }
    if(this.categoriaP.params.nombre.search("MOTHERBOARD") == 0){
      this.darProducto("MOTHERBOARD");
    }
    if(this.categoriaP.params.nombre.search("GPU") == 0){
      this.darProducto("GPU");
    }
    if(this.categoriaP.params.nombre.search("FUENTEPODER") == 0){
      this.darProducto("FUENTEPODER");
    }
    if(this.categoriaP.params.nombre.search("DISIPADOR") == 0){
      this.darProducto("DISIPADOR");
    }
    if(this.categoriaP.params.nombre.search("DISCODURO") == 0){
      this.darProducto("DISCODURO");
    }
    if(this.categoriaP.params.nombre.search("CHASIS") == 0){
      this.darProducto("CHASIS");
    }
    
  }

  ngOnInit(): void{
    
  }
  
  darProducto(tipo: string){ 
    this.serProductos.retornarItems(tipo).subscribe(items => {
      this.productos = items  
   });
  }
}
