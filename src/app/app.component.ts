import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
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
