import {Component, OnInit} from '@angular/core';
import {ServicioComprasService} from '../../Repositorio/Servicios/servicio-compras.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-armatupc',
  templateUrl: './armatupc.component.html',
  styleUrls: ['./armatupc.component.css']
})

export class ArmatupcComponent implements OnInit{
  CPU: any;
  Motherboards: any;
  RAM: any;
  Almacenamiento: any;
  Graficas: any;
  Disipador: any;
  Fuente: any;
  Chasis: any;
  selectedStatusID: number[] = [-1, -1, -1, -1, -1, -1, -1, -1];
  constructor(private pServicios: ServicioComprasService, private ruta: ActivatedRoute) {
    this.CPU = pServicios.retornarItems('CPU');
    this.RAM = pServicios.darColeccion('RAM');
    this.Motherboards = pServicios.darColeccion('MOTHERBOARD');
    this.Almacenamiento = pServicios.darColeccion('DISCODURO');
    this.Graficas = pServicios.darColeccion('GPU');
    this.Disipador = pServicios.darColeccion('DISIPADOR');
    this.Fuente = pServicios.darColeccion('FUENTEPODER');
    this.Chasis = pServicios.darColeccion('CHASIS');
  }
  ngOnInit(): void {
  }
}
