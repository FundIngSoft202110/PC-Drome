import {Producto} from './producto';

export interface Pedido{
  id: string;
  productos: ProductoPedido[];
}

export interface ProductoPedido{
  idProducto: string;
  cantidad: number;
}
