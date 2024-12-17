// Ashish N U
// 25 October 2024

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;
  constructor() { }

  login(email: string, password: string) {
    const localUsers = localStorage.getItem('users');
    const users = localUsers ? JSON.parse(localUsers) : []

    const isUserExist = users.find((user: any) => (user.email === email && user.password === password))
    
    if (isUserExist != undefined) {
      this.isLoggedIn = true;
      return true
    }
    return false;
  }

  isAuthenticated() {
    return this.isLoggedIn;
  }

  logOut() {
    // localStorage.removeItem('isUserExist')
    return this.isLoggedIn = false;
  }
}
