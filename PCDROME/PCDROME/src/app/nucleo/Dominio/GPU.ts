import {Producto} from './producto';
export class GPU extends Producto{

    public ALMACENAMIENTO: string;
    public MARCACHIPSET: string;
    public TIPORAM: string;

    constructor(nombre: string, idProducto: number, precio: number, marca: string,
                descripcion: string, foto: string, descuento: number, ALMACENAMIENTO: string,
                MARCACHIPSET: string, TIPORAM: string){
        super(nombre, idProducto, precio, marca, descripcion, foto, descuento);
        this.ALMACENAMIENTO = ALMACENAMIENTO;
        this.MARCACHIPSET = MARCACHIPSET;
        this.TIPORAM = TIPORAM;
    }
}