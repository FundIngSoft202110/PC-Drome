import {Producto} from './producto';
export class FuentePoder extends Producto{
    public CERTIFICADO: string;
    public FABRICANTE: string;
    public POTENCIA: string;
    public TIPO: string;

    constructor(nombre: string, idProducto: number, precio: number, marca: string,
        descripcion: string, foto: string, descuento: number, CERTIFICADO: string,
        FABRICANTE: string, POTENCIA: string, TIPO: string){
            super(nombre, idProducto, precio, marca, descripcion, foto, descuento);
            this.CERTIFICADO = CERTIFICADO;
            this.FABRICANTE = FABRICANTE;
            this.POTENCIA = POTENCIA;
            this.TIPO = TIPO;

    }
}