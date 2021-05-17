import {Component, OnInit} from '@angular/core';
import {GetProcesadoresUsecase} from '../../nucleo/Casos de uso/getProcesadores.usecase';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-armatupc',
  templateUrl: './armatupc.component.html',
  styleUrls: ['./armatupc.component.css']
})

export class ArmatupcComponent implements OnInit{
  ngOnInit(): void {
  }
}
