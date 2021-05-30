import { Component, OnInit } from '@angular/core';
import {ServicioComprasService} from '../../Repositorio/Servicios/servicio-compras.service';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {ServiciosClienteService} from '../../Repositorio/Servicios/servicios-cliente.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-recomendaciones',
  templateUrl: './recomendaciones.component.html',
  styleUrls: ['./recomendaciones.component.css']
})
export class RecomendacionesComponent implements OnInit {

  public pc1: boolean;
  public pc2: boolean;
  public pc3: boolean;
  public pc4: boolean;
  public pc5: boolean;

  constructor( public carritoService: ServicioComprasService,
               public fbs: AngularFireAuth,
               public router: Router,
               public userService: ServiciosClienteService,
               public formB: FormBuilder) {
    this.pc1 = true;
    this.pc2 = true;
    this.pc3 = true;
    this.pc4 = true;
    this.pc5 = true;
  }

  filterForm = this.formB.group({
    CPU: [''],
    RAM: [ ],
    minP: [ ],
    maxP: [ ]
  });

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  async addCarritorecom1() {
    if (await this.userService.getUid() !== '1') {
      console.log('Usuario logueado ' + await this.userService.getUid());
      console.log('Llamando al builder');
      const user = await this.userService.getUid();
      this.carritoService.addProductcar( 'CPU-4', user );
      this.carritoService.addProductcar( 'RAM-1', user );
      this.carritoService.addProductcar( 'CHASIS-1', user );
      this.carritoService.addProductcar( 'DISCODURO-2', user );
      this.carritoService.addProductcar( 'DISIPADOR-1', user );
      this.carritoService.addProductcar( 'FUENTEPODER-1', user );
      this.carritoService.addProductcar( 'GPU-1', user );
      this.carritoService.addProductcar( 'MOTHERBOARD-1', user );
    }else{
      console.log('No hay un usuario logeado');
      this.router.navigate(['Ingresar']);
    }
  }
  // tslint:disable-next-line:typedef
  async addCarritorecom2() {
    if (await this.userService.getUid() !== '1') {
      console.log('Usuario logueado ' + await this.userService.getUid());
      console.log('Llamando al builder');
      const user = await this.userService.getUid();
      this.carritoService.addProductcar( 'CPU-1', user );
      this.carritoService.addProductcar( 'RAM-2', user );
      this.carritoService.addProductcar( 'CHASIS-101', user );
      this.carritoService.addProductcar( 'DISCODURO-9', user );
      this.carritoService.addProductcar( 'DISIPADOR-2', user );
      this.carritoService.addProductcar( 'FUENTEPODER-2', user );
      this.carritoService.addProductcar( 'GPU-2', user );
      this.carritoService.addProductcar( 'MOTHERBOARD-4', user );
    }else{
      console.log('No hay un usuario logeado');
      this.router.navigate(['Ingresar']);
    }
  }

  // tslint:disable-next-line:typedef
  async addCarritorecom3() {
    if (await this.userService.getUid() !== '1') {
      console.log('Usuario logueado ' + await this.userService.getUid());
      console.log('Llamando al builder');
      const user = await this.userService.getUid();
      this.carritoService.addProductcar( 'CPU-7', user );
      this.carritoService.addProductcar( 'RAM-3', user );
      this.carritoService.addProductcar( 'CHASIS-103', user );
      this.carritoService.addProductcar( 'DISCODURO-16', user );
      this.carritoService.addProductcar( 'DISIPADOR-5', user );
      this.carritoService.addProductcar( 'FUENTEPODER-5', user );
      this.carritoService.addProductcar( 'GPU-4', user );
      this.carritoService.addProductcar( 'MOTHERBOARD-3', user );
    }else{
      console.log('No hay un usuario logeado');
      this.router.navigate(['Ingresar']);
    }
  }

  filtrar(){
    this.pc1 = true;
    this.pc2 = true;
    this.pc3 = true;
    this.pc4 = true;
    this.pc5 = true;

    console.log(this.filterForm.value);
    if (this.filterForm.value.RAM === null && this.filterForm.value.minP === null && this.filterForm.value.maxP == null){
      console.log('No se ingreso RAM, MINP ni MAXP');
      if ( this.filterForm.value.CPU === 'Intel'){
        this.pc5 = false;
      }else if (this.filterForm.value.CPU === 'AMD') {
        this.pc1 = false;
        this.pc2 = false;
        this.pc3 = false;
        this.pc4 = false;
      }else{
        console.log('No se filtró por CPU');
      }
      this.router.navigate(['Recomendaciones']);
    }else if (this.filterForm.value.CPU === '' && this.filterForm.value.minP === null && this.filterForm.value.maxP == null){
      console.log('No se ingresó CPU, MINP ni MAXP');
      if ( this.filterForm.value.RAM === '8'){
        this.pc4 = false;
        this.pc5 = false;
      }else if (this.filterForm.value.RAM === '16') {
        this.pc1 = false;
        this.pc2 = false;
        this.pc3 = false;
      }else{
        console.log('No se filtró por RAM');
      }
      this.router.navigate(['Recomendaciones']);
    }else if (this.filterForm.value.CPU === '' && this.filterForm.value.RAM === null){
      console.log('No se ingresó CPU ni RAM');
      this.pc1 = false;
      this.pc2 = false;
      this.pc3 = false;
      this.pc4 = false;
      this.pc5 = false;
      if ( this.filterForm.value.minP < 1766000 && this.filterForm.value.maxP > 1766000){
        this.pc1 = true;
      }
      if (this.filterForm.value.minP < 2268000 && this.filterForm.value.maxP > 2268000) {
        this.pc2 = true;
      }
      if (this.filterForm.value.minP < 3461000 && this.filterForm.value.maxP > 3461000) {
        this.pc3 = true;
      }
      if (this.filterForm.value.minP < 5127000 && this.filterForm.value.maxP > 5127000) {
        this.pc4 = true;
      }
      if (this.filterForm.value.minP < 6999000 && this.filterForm.value.maxP > 6999000) {
        this.pc5 = true;
      }
      this.router.navigate(['Recomendaciones']);
    }else if (this.filterForm.value.CPU !== '' && this.filterForm.value.RAM !== null &&
      this.filterForm.value.maxP === null && this.filterForm.value.minP === null){
      console.log('Se ingresó CPU y RAM');
      this.pc1 = false;
      this.pc2 = false;
      this.pc3 = false;
      this.pc4 = false;
      this.pc5 = false;
      if (this.filterForm.value.CPU === 'Intel' && this.filterForm.value.RAM === '8'){
        this.pc1 = true;
        this.pc2 = true;
        this.pc3 = true;
      }else if (this.filterForm.value.CPU === 'Intel' && this.filterForm.value.RAM === '16'){
        this.pc4 = true;
      }else if (this.filterForm.value.CPU === 'AMD' && this.filterForm.value.RAM === '8'){
        console.log('No hay pcs con CPU AMD y 8GB de RAM');
      }else if (this.filterForm.value.CPU === 'AMD' && this.filterForm.value.RAM === '16'){
        this.pc5 = true;
      }
      this.router.navigate(['Recomendaciones']);
    }
    else if (this.filterForm.value.CPU !== '' && this.filterForm.value.RAM !== null &&
      this.filterForm.value.maxP !== null && this.filterForm.value.minP !== null){
      console.log('Se han ingresado todos los parametros');
      this.pc1 = false;
      this.pc2 = false;
      this.pc3 = false;
      this.pc4 = false;
      this.pc5 = false;
      if ( this.filterForm.value.minP < 1766000 && this.filterForm.value.maxP > 1766000){
        if (this.filterForm.value.CPU === 'Intel' && this.filterForm.value.RAM === '8'){
          this.pc1 = true;
        }
      }
      if (this.filterForm.value.minP < 2268000 && this.filterForm.value.maxP > 2268000) {
        if (this.filterForm.value.CPU === 'Intel' && this.filterForm.value.RAM === '8'){
          this.pc2 = true;
        }
      }
      if (this.filterForm.value.minP < 3461000 && this.filterForm.value.maxP > 3461000) {
        if (this.filterForm.value.CPU === 'Intel' && this.filterForm.value.RAM === '8'){
          this.pc3 = true;
        }
      }
      if (this.filterForm.value.minP < 5127000 && this.filterForm.value.maxP > 5127000) {
        if (this.filterForm.value.CPU === 'Intel' && this.filterForm.value.RAM === '16'){
          this.pc4 = true;
        }
      }
      if (this.filterForm.value.minP < 6999000 && this.filterForm.value.maxP > 6999000) {
        if (this.filterForm.value.CPU === 'AMD' && this.filterForm.value.RAM === '16'){
          this.pc5 = true;
        }
      }
      this.router.navigate(['Recomendaciones']);
    }
  }

}
