import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: any;
  cars$: Observable<any[]>;
  private carsCollection: AngularFirestoreCollection<any>;
  constructor(
    private firestore: AngularFirestore,
    private auth: AuthService,
    public firebaseAuth: AngularFireAuth,
    private local: LocalStorageService
  ) {
    this.carsCollection = this.firestore.collection('cars');
    this.cars$ = this.firestore.collection('cars').valueChanges({
      idField: 'customID'
    });
  }
  ngOnInit(): void {
    this.firebaseAuth.user.subscribe(res => {
      this.user = res;
    });
  }
  logout() {
    this.auth.logout();
  }
  deleteCar(car) {
    const customID = car.customID;
    delete car.customID;
    this.carsCollection.doc(customID).delete();
  }
  updateCar(car) {
    const customID = car.customID;
    delete car.customID;
    delete car.edit;
    this.carsCollection.doc(customID).update(car);
  }
}
