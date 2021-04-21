import {Producto} from './producto';
export class CPU extends Producto{
  public MODELO: string;
  public VELOCIDAD: number;
  public CANTIDADNUCLEOS: string;
  public TAMANOCACHE: string;
  public TIPOSOCKET: string;
  public GENERACION: string;
  constructor(nombre: string, idProducto: number, precio: number, marca: string,
              descripcion: string, foto: string, descuento: number, MODELO: string,
              VELOCIDAD: number, CANTIDADNUCLEOS: string, TAMANOCACHE: string, TIPOSOCKET: string,
              GENERACION: string
              ) {
    super(nombre, idProducto, precio, marca, descripcion, foto, descuento);
    this.MODELO = MODELO;
    this.VELOCIDAD = VELOCIDAD;
    this.CANTIDADNUCLEOS = CANTIDADNUCLEOS;
    this.TAMANOCACHE = TAMANOCACHE;
    this.TIPOSOCKET = TIPOSOCKET;
    this.GENERACION = GENERACION;
  }
}
