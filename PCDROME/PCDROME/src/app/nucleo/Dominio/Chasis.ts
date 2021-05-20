import {Producto} from './producto';
export class Chasis extends Producto{
    public COMPMOTHERBOARD: string;

    constructor(nombre: string, idProducto: number, precio: number, marca: string,
                descripcion: string, foto: string, descuento: number, COMPMOTHERBOARD: string){
            super(nombre, idProducto, precio, marca, descripcion, foto, descuento);
            this.COMPMOTHERBOARD = COMPMOTHERBOARD;
            }
}
