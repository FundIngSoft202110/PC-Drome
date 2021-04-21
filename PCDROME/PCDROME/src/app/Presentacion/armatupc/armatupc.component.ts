import {Component, OnInit} from '@angular/core';
import {GetProcesadoresUsecase} from '../../nucleo/Casos de uso/getProcesadores.usecase';

@Component({
  selector: 'app-armatupc',
  templateUrl: './armatupc.component.html',
  styleUrls: ['./armatupc.component.css']
})

export class ArmatupcComponent implements OnInit{
  isLinear: boolean;
  savePartById: string[];
  constructor() {
    this.isLinear = false;
    this.savePartById = [];
  }
  ngOnInit(): void {
    this.getProcesadores();
  }
  getProcesadores(): void{
    GetProcesadoresUsecase.prototype.obternerProcesadores();
  }
}
