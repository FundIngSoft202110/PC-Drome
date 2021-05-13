import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'PCDROME';
  items: Observable<any[]>;
  
  constructor(firestore: AngularFirestore, private router: Router) {
    this.items = firestore.collection('PROCESADORES').valueChanges();
    
  }
  ngOnInit(): void {
  }
  
}
