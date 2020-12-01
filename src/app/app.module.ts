import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CarComponent } from './car/car.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyCmnP9rDKUE_CaBNfB17DI4D6hvvdjjlJE',
      authDomain: 'angular-auth-cars.firebaseapp.com',
      databaseURL: 'https://angular-auth-cars.firebaseio.com',
      projectId: 'angular-auth-cars',
      storageBucket: 'angular-auth-cars.appspot.com',
      messagingSenderId: '572306601919',
      appId: '1:572306601919:web:18bd1790250585fbb3530a',
      measurementId: 'G-BJZ8CJ43PW'
    }),
    AngularFireAuthModule,
    AngularFirestoreModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
