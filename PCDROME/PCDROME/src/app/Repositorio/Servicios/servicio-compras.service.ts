import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Producto} from '../../nucleo/Dominio/producto';
import {CPU} from '../../nucleo/Dominio/CPU';
import firebase from 'firebase';
import firestore = firebase.firestore;
import {PartialObserver} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioComprasService {

  listaProductos: Array<Producto>;
  listaProcesadores: Array<CPU>;
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private firestore: AngularFirestore) {
    this.listaProductos = [];
    this.listaProcesadores = [];
  }
  public async getProcesadores(): Promise<void> {
    const citiesRef = this.firestore.collection('PROCESADORES');
    const snapshot = await citiesRef.get();
    snapshot.forEach(doc => {
      // @ts-ignore
      console.log(doc.id, '=>', doc.data());
    });
  }
}
