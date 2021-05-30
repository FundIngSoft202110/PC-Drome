import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CPU } from '../../nucleo/Dominio/CPU';
import { RAM } from '../../nucleo/Dominio/RAM';
import { Motherboard } from '../../nucleo/Dominio/Motherboard';
import { GPU } from '../../nucleo/Dominio/GPU';
import { FuentePoder } from '../../nucleo/Dominio/FuentePoder';
import { Disipador } from '../../nucleo/Dominio/Disipador';
import { DiscoDuro } from '../../nucleo/Dominio/DiscoDuro';
import { Chasis } from '../../nucleo/Dominio/Chasis';
import { Pedido, ProductoPedido } from '../../nucleo/Dominio/Pedido';
import {Producto} from '../../nucleo/Dominio/producto';
import 'firebase/firestore';
import firebase from 'firebase';
import {ProductoComponent} from '../../Presentacion/producto/producto.component';
import {PagarPedidoComponent} from "../../Presentacion/pagar-pedido/pagar-pedido.component";


@Injectable({
  providedIn: 'root'
})

export class ServicioComprasService {

  private productosCollection!: AngularFirestoreCollection<any>;
  productos: Observable<any[]>;
  busqueda: Observable<any[]>[];
  // @ts-ignore
  private pedido: Pedido;
  // @ts-ignore
  private i: number;

  constructor(private afs: AngularFirestore) {
    this.productos = new Observable<any[]>();
    this.busqueda = [];
    this.i = 0;
  }

  retornarItems(nColeccion: string){
    this.darColeccion(nColeccion);
    return this.productos;
  }


  darColeccion(nColeccion: string){
    if (nColeccion == 'CPU'){
      this.productosCollection = this.afs.collection<CPU>('PROCESADORES');
      this.productos = this.productosCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as CPU;
          const id = a.payload.doc.id;
          return {id, ...data};
        }))
      );
    }
    if (nColeccion == 'RAM'){
      this.productosCollection = this.afs.collection<RAM>('RAM');
      this.productos = this.productosCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as RAM;
          const id = a.payload.doc.id;
          return {id, ...data};
        }))
      );
    }
    if (nColeccion == 'MOTHERBOARD'){
      this.productosCollection = this.afs.collection<Motherboard>('MOTHERBOARD');
      this.productos = this.productosCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Motherboard;
          const id = a.payload.doc.id;
          return {id, ...data};
        }))
      );
    }
    if (nColeccion == 'GPU'){
      this.productosCollection = this.afs.collection<GPU>('GPU');
      this.productos = this.productosCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as GPU;
          const id = a.payload.doc.id;
          return {id, ...data};
        }))
      );
    }
    if (nColeccion == 'FUENTEPODER'){
      this.productosCollection = this.afs.collection<FuentePoder>('FUENTEPODER');
      this.productos = this.productosCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as FuentePoder;
          const id = a.payload.doc.id;
          return {id, ...data};
        }))
      );
    }
    if (nColeccion == 'DISIPADOR'){
      this.productosCollection = this.afs.collection<Disipador>('DISIPADOR');
      this.productos = this.productosCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Disipador;
          const id = a.payload.doc.id;
          return {id, ...data};
        }))
      );
    }
    if (nColeccion == 'DISCODURO'){
      this.productosCollection = this.afs.collection<DiscoDuro>('DISCODURO');
      this.productos = this.productosCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as DiscoDuro;
          const id = a.payload.doc.id;
          return {id, ...data};
        }))
      );
    }
    if (nColeccion == 'CHASIS'){
      this.productosCollection = this.afs.collection<Chasis>('CHASIS');
      this.productos = this.productosCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Chasis;
          const id = a.payload.doc.id;
          return {id, ...data};
        }))
      );
    }
  }

  addProductcar( producto: string, iduser: string ){
    console.log('Añadiendo producto...' + producto);
    const db = firebase.firestore();
    const docRefcar = db.collection('Usuarios').doc(iduser).collection('carrito').doc('CPU-4');
    const cpedido: ProductoPedido = {
      idProducto: producto,
      cantidad: 0
    };

    docRefcar.get().then((doc) => {
      if (doc.exists) {
        console.log('IF');
        console.log('Document data:', doc.data());
        cpedido.cantidad = 2;
        docRefcar.set(cpedido).then(() => {
          console.log('Document successfully written! of ' + producto);
        })
          .catch((error) => {
            console.error('Error writing document CPU-4: ', error);
          });
      } else {
        console.log('ELSE');
        cpedido.cantidad++;
        docRefcar.set(cpedido).then(() => {
          console.log('Document successfully written! of ' + producto);
        })
          .catch((error) => {
            console.error('Error writing document' + producto + ': ', error);
          });
        console.log('No such document!');
      }
    }).catch((error) => {
      console.log('Error getting document:', error);
    });
  }

  loadCar(iduser: string){
  }

  buscarProducto(consulta: string){
    this.busqueda = [];
    const tProductos = ["PROCESADORES","CHASIS","DISCODURO","DISIPADOR","FUENTEPODER","GPU","MOTHERBOARD","RAM"];
    console.log("consulta a realizar " + consulta)

    tProductos.forEach(cat => {
      this.busqueda.push(this.afs.collection( cat, ref => ref.where('MARCA', '==',consulta)
      ).snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Producto;
          const id = a.payload.doc.id;
          return {id, ...data};
        }))))
    })
    tProductos.forEach(cat => {
      this.busqueda.push(this.afs.collection( cat, ref => ref.where('NOMBRE', '==',consulta)
      ).snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Producto;
          const id = a.payload.doc.id;
          return {id, ...data};
        }))))
    })
    tProductos.forEach(cat => {
      this.busqueda.push(this.afs.collection( cat, ref => ref.where('DESCRIPCION', '==',consulta)
      ).snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Producto;
          const id = a.payload.doc.id;
          return {id, ...data};
        }))))
    })
    return this.busqueda;
  }

}
