import {Producto} from './producto';
export class Disipador extends Producto{
    public SOCKETCPU: string;
    public TIPOREFRIGERACION: string;

    constructor(nombre: string, idProducto: number, precio: number, marca: string,
        descripcion: string, foto: string, descuento: number, SOCKETCPU: string,
        TIPOREFRIGERCION: string){
            super(nombre, idProducto, precio, marca, descripcion, foto, descuento);
            this.SOCKETCPU = SOCKETCPU;
            this.TIPOREFRIGERACION = TIPOREFRIGERCION;
            }
}