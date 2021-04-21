import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ServicioComprasService} from '../../Repositorio/Servicios/servicio-compras.service';
import {CPU} from '../Dominio/CPU';

@Injectable({
  providedIn: 'root'
})
export class GetProcesadoresUsecase{
  procesadores: Array<CPU>;
  constructor(servicioCompras: ServicioComprasService) {
    this.procesadores = [];
  }
  async obternerProcesadores(): Promise<void> {
    ServicioComprasService.prototype.getProcesadores();
  }
}
