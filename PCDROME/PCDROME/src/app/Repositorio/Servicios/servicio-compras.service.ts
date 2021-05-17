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


@Injectable({
  providedIn: 'root'
})

export class ServicioComprasService {
  private productosCollection!: AngularFirestoreCollection<any>;
  productos: Observable<any[]>;

  constructor(private afs: AngularFirestore) {
   
    this.productos = new Observable<any[]>();
    
  }

  retornarItems(nColeccion: string){
    this.darColeccion(nColeccion);
    return this.productos;
  }
  

  darColeccion(nColeccion: string){
    if(nColeccion == "CPU"){
      this.productosCollection = this.afs.collection<CPU>('PROCESADORES');
      this.productos = this.productosCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as CPU;
          const id = a.payload.doc.id;
          return {id,...data};
        }))
      );
    }
    if(nColeccion == "RAM"){
      this.productosCollection = this.afs.collection<RAM>('RAM');
      this.productos = this.productosCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as RAM;
          const id = a.payload.doc.id;
          return {id,...data};
        }))
      );
    }
    if(nColeccion == "MOTHERBOARD"){
      this.productosCollection = this.afs.collection<Motherboard>('MOTHERBOARD');
      this.productos = this.productosCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Motherboard;
          const id = a.payload.doc.id;
          return {id,...data};
        }))
      );
    }
    if(nColeccion == "GPU"){
      this.productosCollection = this.afs.collection<GPU>('GPU');
      this.productos = this.productosCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as GPU;
          const id = a.payload.doc.id;
          return {id,...data};
        }))
      );
    }
    if(nColeccion == "FUENTEPODER"){
      this.productosCollection = this.afs.collection<FuentePoder>('FUENTEPODER');
      this.productos = this.productosCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as FuentePoder;
          const id = a.payload.doc.id;
          return {id,...data};
        }))
      );
    }
    if(nColeccion == "DISIPADOR"){
      this.productosCollection = this.afs.collection<Disipador>('DISIPADOR');
      this.productos = this.productosCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Disipador;
          const id = a.payload.doc.id;
          return {id,...data};
        }))
      );
    }
    if(nColeccion == "DISCODURO"){
      this.productosCollection = this.afs.collection<DiscoDuro>('DISCODURO');
      this.productos = this.productosCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as DiscoDuro;
          const id = a.payload.doc.id;
          return {id,...data};
        }))
      );
    }
    if(nColeccion == "CHASIS"){
      this.productosCollection = this.afs.collection<Chasis>('CHASIS');
      this.productos = this.productosCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Chasis;
          const id = a.payload.doc.id;
          return {id,...data};
        }))
      );
    }
  } 
}
