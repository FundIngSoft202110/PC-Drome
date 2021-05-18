import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Comentario } from 'src/app/nucleo/Dominio/Comentario';

@Injectable({
  providedIn: 'root'
})
export class ServiciosCalificarService {
  private calificacionesCollection!: AngularFirestoreCollection<any>;
  comentarios: Observable<any[]>;

  constructor(private afs: AngularFirestore) {

    this.calificacionesCollection = this.afs.collection<Comentario>('COMENTARIOS');
      this.comentarios = this.calificacionesCollection.valueChanges()
   }
   retornarComentarios(){
     return this.comentarios;
   }

   agregarComentario(comentario: Comentario){
     this.calificacionesCollection.add(comentario);
   }
}
