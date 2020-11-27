import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  constructor(
    public firebaseAuth: AngularFireAuth,
    private router: Router) {
  }
  signin(email: string, password: string) {
    this.firebaseAuth.signInWithEmailAndPassword(email, password)
      .then(res => {
        this.router.navigateByUrl('/home');
      })
      .catch(err => {
        alert(err.message);
        console.log(err);
      });
  }
  signInWithGoogle() {
    this.firebaseAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(res => {
        this.router.navigateByUrl('/home');
      }).catch(err => {
        alert(err.message);
      });
  }
  signup(email: string, password: string) {
    this.firebaseAuth.createUserWithEmailAndPassword(email, password)
      .then(res => {
      })
      .catch(err => {
        alert(err.message);
        console.log(err);
      });
  }
  logout() {
    this.firebaseAuth.signOut()
      .then(res => {
        this.router.navigateByUrl('/');
      }).catch(err => {
        alert(err.message);
      });
  }
}
