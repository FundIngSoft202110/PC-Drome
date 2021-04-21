import {publish} from 'rxjs/operators';

export abstract class Producto{
  public nombre: string;
  public idProducto: number;
  public precio: number;
  public marca: string;
  public descripcion: string;
  public foto: string;
  public descuento: number;

  constructor(nombre: string, idProducto: number, precio: number, marca: string, descripcion: string, foto: string, descuento: number) {
    this.nombre = nombre;
    this.idProducto = idProducto;
    this.precio = precio;
    this.marca = marca;
    this.descripcion = descripcion;
    this.foto = foto;
    this.descuento = descuento;
  }
}
