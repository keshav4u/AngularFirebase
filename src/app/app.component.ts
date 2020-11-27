import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { LocalStorageService } from './services/local-storage.service';
import firebase from 'firebase/app';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AngularFirebase';
  user;

  constructor(
    public auth: AuthService,
    private local: LocalStorageService,
    public firebaseAuth: AngularFireAuth,
    private router: Router) { }
  ngOnInit() {
    this.firebaseAuth.user.subscribe(user => {
      this.user = user;
    });
  }


  signIn(email: string, password: string) {
    this.auth.signin(email, password);
  }

  signInWithGoogle() {
    this.auth.signInWithGoogle();
  }

  signUp(name: string, email: string, password: string) {
    this.auth.signup(email, password);
    if (this.auth.isLoggedIn) {
      this.firebaseAuth.onAuthStateChanged(user => {
        if (user) {
          user.updateProfile({
            displayName: name
          }).then(res => {
            const localUser = this.local.getUser();
            localUser.displayName = name;
            this.local.addUser(localUser);
            this.router.navigateByUrl('/home');
          }).catch(err => {
            console.log(err);
          });
        }

      });
    }
  }
}
