import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  addUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }
  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
  deleteUser() {
    localStorage.removeItem('user');
  }
}
