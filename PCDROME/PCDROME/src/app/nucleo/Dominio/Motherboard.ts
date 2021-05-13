import {Producto} from './producto';
export class Motherboard extends Producto{
    public RANURASMEMORIA: number;
    public TECNOLOGIARAM: string;
    public TIPOSOCKET: string;

    constructor(nombre: string, idProducto: number, precio: number, marca: string,descripcion: string, foto: string, descuento: number, RANURASMEMORIA: number,TECNOLOGIARAM: string, TIPOSOCKET: string){
        super(nombre, idProducto, precio, marca, descripcion, foto, descuento);
        this.RANURASMEMORIA = RANURASMEMORIA;
        this.TECNOLOGIARAM = TECNOLOGIARAM;
        this.TIPOSOCKET = TIPOSOCKET;
    }

}