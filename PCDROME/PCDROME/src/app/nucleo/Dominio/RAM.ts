import {Producto} from './producto';
export class RAM extends Producto{
    public TAMANOMEMORIA: string;
    public TIPO: string;
    public VELOCIDAD: string;

    constructor(nombre: string, idProducto: number, precio: number, marca: string,
        descripcion: string, foto: string, descuento: number, TAMANOMEMORIA: string, TIPO: string, VELOCIDAD: string){
        super(nombre, idProducto, precio, marca, descripcion, foto, descuento);
        this.TAMANOMEMORIA = TAMANOMEMORIA;
        this.TIPO = TIPO;
        this.VELOCIDAD = VELOCIDAD;
    }
} 