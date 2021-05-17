import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {MatIconRegistry} from '@angular/material/icon';
import {sanitizeIdentifier} from '@angular/compiler';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PCDROME';
  //items: Observable<any[]>;
  // @ts-ignore
  constructor(firestore: AngularFirestore){
    //this.items = firestore.collection('PROCESADORES').valueChanges();
  }
}
