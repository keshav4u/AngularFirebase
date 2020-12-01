import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title = 'AngularFirebase';
  user: firebase.User;
  constructor(
    public auth: AuthService,
    public firebaseAuth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit(): void {
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
    this.firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        user.updateProfile({
          displayName: name
        }).then(res => {
          this.router.navigateByUrl('/home');
        }).catch(err => {
          console.log(err);
        });
      }

    });

  }

}
