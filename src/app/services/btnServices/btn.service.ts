// Ashish N U
// 25 October 2024

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BtnService {

  private loginVisible: boolean = true;
  private signupVisible: boolean = true;
  private logoutVisible: boolean = false;

  hideLoginButton() {
    this.loginVisible = false;
  }

  hideSignupButton() {
    this.signupVisible = false;
  }

  showLogoutButton() {
    this.logoutVisible = true;
  }

  showLoginButton() {
    this.loginVisible = true;
  }

  showSignupButton() {
    this.signupVisible = true;
  }

  hideLogoutButton() {
    this.logoutVisible = false;
  }

  isLoginVisible(): boolean {
    return this.loginVisible;
  }

  isSignupVisible(): boolean {
    return this.signupVisible;
  }

  isLogoutVisible(): boolean {
    return this.logoutVisible;
  }
}
