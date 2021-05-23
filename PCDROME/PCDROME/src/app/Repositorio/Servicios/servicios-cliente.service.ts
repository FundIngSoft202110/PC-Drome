import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';
import {Usuario} from '../../nucleo/Dominio/Usuario';
import {AngularFirestore} from '@angular/fire/firestore';
import {HeaderMenuComponent} from '../../Presentacion/header-menu/header-menu.component';

@Injectable({
  providedIn: 'root'
})
export class ServiciosClienteService {
  private usuario: Usuario = {
    uid: '',
    nombre: '',
    email: '',
    telefono: '',
    password: ''
  };

  constructor(public auth: AngularFireAuth,
              public firestoreService: AngularFirestore) { }

  async iniciarSesion(correo: string, contraseña: string){
      return await this.auth.signInWithEmailAndPassword(correo, contraseña);
  }

  async registrarse(correo: string, contrasena: string, nombre: string, telefono: string){
      const val = await this.auth.createUserWithEmailAndPassword(correo, contrasena);
      const id = await this.getUid();
      if (id != "1"){
        this.usuario.uid = id;
      }
      console.log(id);
      this.usuario.email = correo;
      this.usuario.password = contrasena;
      this.usuario.nombre = nombre;
      this.usuario.telefono = telefono;
      this.firestoreService.collection("Usuarios").doc(this.usuario.uid).set(this.usuario).then(() => {
        console.log('Document successfully written!');
      })
        .catch((error) => {
          console.error('Error writing document: ', error);
        });
      return val;
  }

  async cerrarSesion(){
      await this.auth.signOut();
  }

  darUsuarioAct(){
     return this.auth.authState.pipe(first()).toPromise();
  }

  async getUid(){
    // @ts-ignore
    const user = await this.auth.currentUser;
    if (user){
      return user.uid;
    }else {
      console.log('1');
      return '1';
    }
  }
}
