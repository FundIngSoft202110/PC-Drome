import {Producto} from './producto';

export interface Pedido{
  id: string;
  productos: productPedido[];
}

// tslint:disable-next-line:class-name
interface productPedido{
  producto: Producto;
  cantidad: number;
}
