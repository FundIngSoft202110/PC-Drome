import {Producto} from './producto';
export class DiscoDuro extends Producto{
    public CAPACIDAD: string;
    public FABRICANTE: string;
    public TIPO: string;

    constructor(nombre: string, idProducto: number, precio: number, marca: string,
        descripcion: string, foto: string, descuento: number, CAPACIDAD: string,
        FABRICANTE: string, TIPO: string){
            super(nombre, idProducto, precio, marca, descripcion, foto, descuento);
            this.CAPACIDAD = CAPACIDAD;
            this.FABRICANTE = FABRICANTE;
            this.TIPO = TIPO;
            }
}