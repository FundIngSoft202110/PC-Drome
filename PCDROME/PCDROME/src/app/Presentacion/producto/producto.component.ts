import { Component, OnInit } from '@angular/core';
import { ServicioComprasService} from '../../Repositorio/Servicios/servicio-compras.service';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { CPU } from 'src/app/nucleo/Dominio/CPU';
import { RAM } from '../../nucleo/Dominio/RAM';
import { Motherboard } from '../../nucleo/Dominio/Motherboard';
import { GPU } from '../../nucleo/Dominio/GPU';
import { FuentePoder } from '../../nucleo/Dominio/FuentePoder';
import { Disipador } from '../../nucleo/Dominio/Disipador';
import { DiscoDuro } from '../../nucleo/Dominio/DiscoDuro';
import { Chasis } from '../../nucleo/Dominio/Chasis';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  public cpus: any;
  private producto: any;
  public pr: any;
  private idProducto:any;
  

  constructor(private pServicios:ServicioComprasService, private ruta: ActivatedRoute, ) {
 
    this.ruta.paramMap.subscribe(id => this.idProducto = id);
    if(this.idProducto.params.id.search("CPU") == 0){
      this.darCPU();
    }
    if(this.idProducto.params.id.search("RAM") == 0){
      this.darRAM();
    }
    if(this.idProducto.params.id.search("MOTHERBOARD") == 0){
      this.darMother();
    }
    if(this.idProducto.params.id.search("GPU") == 0){
      this.darGPU();
    }
    if(this.idProducto.params.id.search("FUENTEPODER") == 0){
      this.darFuente();
    }
    if(this.idProducto.params.id.search("DISIPADOR") == 0){
      this.darDisipador();
    }
    if(this.idProducto.params.id.search("DISCODURO") == 0){
      this.darDisco();
    }
    if(this.idProducto.params.id.search("CHASIS") == 0){
      this.darChasis();
    }
  }

  tomarCalificacion(event: any){
    console.log(event.target.name, event.target.value);
  }

  getValue(value: string){
    console.log(value);
  }

  darCPU(){
    this.pr = new CPU("Nombre",0,0,"marca","descripcion","foto",0,"modelo",0,"nucleos","cache","socket","generacion");
    
    this.pServicios.retornarItems("CPU").subscribe(items => {
      this.cpus = items
      this.producto = this.cpus.filter((cpu: { id: string; }) => cpu.id == this.idProducto.params.id)

      this.pr = new CPU(this.producto[0].NOMBRE,this.producto[0].IDPRODUCTO,this.producto[0].PRECIO,
                         this.producto[0].MARCA,this.producto[0].DESCRIPCION,this.producto[0].FOTO,this.producto[0].DESCUENTO,
                         this.producto[0].MODELO,this.producto[0].VELOCIDAD,this.producto[0].CANTIDADNUCLEOS,
                         this.producto[0].TAMANOCACHE,this.producto[0].TIPOSOCKET,this.producto[0].GENERACION);
      console.log(this.pr);
     
   });
  }
   darRAM(){
    this.pr = new RAM("Nombre",0,0,"marca","descripcion","foto",0,"tMemoria","tipo","velocidad");

    this.pServicios.retornarItems("RAM").subscribe(items => {
      this.cpus = items
      this.producto = this.cpus.filter((cpu: { id: string; }) => cpu.id == this.idProducto.params.id)

      this.pr = new RAM(this.producto[0].NOMBRE,this.producto[0].IDPRODUCTO,this.producto[0].PRECIO,
                        this.producto[0].MARCA,this.producto[0].DESCRIPCION,this.producto[0].FOTO,this.producto[0].DESCUENTO,
                        this.producto[0].TAMANOMEMORIA,this.producto[0].TIPO,this.producto[0].VELOCIDAD)
     console.log(this.pr);
   });
  } 
  darMother(){
    this.pr = new Motherboard("Nombre",0,0,"marca","descripcion","foto",0,0,"tecRam","tSocket");

    this.pServicios.retornarItems("MOTHERBOARD").subscribe(items => {
      this.cpus = items
      this.producto = this.cpus.filter((cpu: { id: string; }) => cpu.id == this.idProducto.params.id)

      this.pr = new Motherboard(this.producto[0].NOMBRE,this.producto[0].IDPRODUCTO,this.producto[0].PRECIO,
                        this.producto[0].MARCA,this.producto[0].DESCRIPCION,this.producto[0].FOTO,this.producto[0].DESCUENTO,
                        this.producto[0].RANURASMEMORIA,this.producto[0].TECNOLOGIARAM,this.producto[0].TIPOSOCKET)
                        console.log(this.pr);
   });
  }
  darGPU(){
    this.pr = new GPU("Nombre",0,0,"marca","descripcion","foto",0,"alm","marcachip","tiporam");

    this.pServicios.retornarItems("GPU").subscribe(items => {
      this.cpus = items
      this.producto = this.cpus.filter((cpu: { id: string; }) => cpu.id == this.idProducto.params.id)

      this.pr = new GPU(this.producto[0].NOMBRE,this.producto[0].IDPRODUCTO,this.producto[0].PRECIO,
                        this.producto[0].MARCA,this.producto[0].DESCRIPCION,this.producto[0].FOTO,this.producto[0].DESCUENTO,
                        this.producto[0].ALMACENAMIENTO,this.producto[0].MARCACHIPSET,this.producto[0].TIPORAM)
                        console.log(this.pr);
   });
  }
  darFuente(){
    this.pr = new FuentePoder("Nombre",0,0,"marca","descripcion","foto",0,"certificado","fabricante","potencia","tipo");

    this.pServicios.retornarItems("FUENTEPODER").subscribe(items => {
      this.cpus = items
      this.producto = this.cpus.filter((cpu: { id: string; }) => cpu.id == this.idProducto.params.id)

      this.pr = new FuentePoder(this.producto[0].NOMBRE,this.producto[0].IDPRODUCTO,this.producto[0].PRECIO,
                        this.producto[0].MARCA,this.producto[0].DESCRIPCION,this.producto[0].FOTO,this.producto[0].DESCUENTO,
                        this.producto[0].CERTIFICADO,this.producto[0].FABRICANTE,this.producto[0].POTENCIA,this.producto[0].TIPO)
                        console.log(this.pr);
   });
  }
  darDisipador(){
    this.pr = new Disipador("Nombre",0,0,"marca","descripcion","foto",0,"socketcpu","tiporefri");

    this.pServicios.retornarItems("DISIPADOR").subscribe(items => {
      this.cpus = items
      this.producto = this.cpus.filter((cpu: { id: string; }) => cpu.id == this.idProducto.params.id)

      this.pr = new Disipador(this.producto[0].NOMBRE,this.producto[0].IDPRODUCTO,this.producto[0].PRECIO,
                        this.producto[0].MARCA,this.producto[0].DESCRIPCION,this.producto[0].FOTO,this.producto[0].DESCUENTO,
                        this.producto[0].SOCKETCPU,this.producto[0].TIPOREFRIGERACION)
                        console.log(this.pr);
   });
  }
  darDisco(){
    this.pr = new DiscoDuro("Nombre",0,0,"marca","descripcion","foto",0,"capacidad","fabricante","tipo");

    this.pServicios.retornarItems("DISCODURO").subscribe(items => {
      this.cpus = items
      this.producto = this.cpus.filter((cpu: { id: string; }) => cpu.id == this.idProducto.params.id)

      this.pr = new DiscoDuro(this.producto[0].NOMBRE,this.producto[0].IDPRODUCTO,this.producto[0].PRECIO,
                        this.producto[0].MARCA,this.producto[0].DESCRIPCION,this.producto[0].FOTO,this.producto[0].DESCUENTO,
                        this.producto[0].CAPACIDAD,this.producto[0].FABRICANTE,this.producto[0].TIPO)
                        console.log(this.pr);
   });
  }
  darChasis(){
    this.pr = new Chasis("Nombre",0,0,"marca","descripcion","foto",0,"compatibleM");

    this.pServicios.retornarItems("CHASIS").subscribe(items => {
      this.cpus = items
      this.producto = this.cpus.filter((cpu: { id: string; }) => cpu.id == this.idProducto.params.id)

      this.pr = new Chasis(this.producto[0].NOMBRE,this.producto[0].IDPRODUCTO,this.producto[0].PRECIO,
                        this.producto[0].MARCA,this.producto[0].DESCRIPCION,this.producto[0].FOTO,this.producto[0].DESCUENTO,
                        this.producto[0].COMPMOTHERBOARD)
                        console.log(this.pr);
   });
  }


  ngOnInit(): void {
  }
}
