import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiciosClienteService {

  constructor(public auth: AngularFireAuth) { }

  async iniciarSesion(correo: string, contraseña: string){
    
    try{
      const resultado = await this.auth.signInWithEmailAndPassword(correo, contraseña);
      return resultado;
    }
    catch(error){
      console.log(error);
    }
  }

  async registrarse(correo: string, contraseña: string, nombre: string, telefono: string){
    
    try{
      const resultado = await this.auth.createUserWithEmailAndPassword(correo,contraseña);

      return resultado;
    }
    catch(error){
      console.log(error);
    }   
  }

  registrarUsuario(){
    
  }

  async cerrarSesion(){
    await this.auth.signOut();
  }

  darUsuarioAct(){
     return this.auth.authState.pipe(first()).subscribe();
  }
}
