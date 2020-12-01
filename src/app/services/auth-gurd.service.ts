import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGurdService implements CanActivate {
  constructor(
    private firebaseAuth: AngularFireAuth,
    private router: Router) { }
  canActivate(): Observable<boolean> {
    return this.firebaseAuth.user.pipe(
      map(user => {
        if (user !== null) {
          return true;
        } else {
          this.router.navigateByUrl('');
          return false;
        }
      })
    );
  }
}

@Injectable({
  providedIn: 'root'
})
export class LoginAuthGurdService implements CanActivate {
  constructor(
    private firebaseAuth: AngularFireAuth,
    private router: Router
  ) { }
  canActivate(): Observable<boolean> {
    return this.firebaseAuth.user.pipe(
      map(user => {
        if (user === null) {
          return true;
        } else {
          this.router.navigateByUrl('home');
          return false;
        }
      })
    );
  }
}
