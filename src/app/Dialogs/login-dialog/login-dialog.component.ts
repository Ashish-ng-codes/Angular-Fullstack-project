// Ashish N U
// 25 October 2024

import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormsModule, NgModel } from '@angular/forms';
import { NgIf } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { unsubscribe } from 'diagnostics_channel';
import { Router } from 'express';
import { AuthService } from '../../services/authService/auth.service';
import { BtnService } from '../../services/btnServices/btn.service';

@Component({
  selector: 'app-login-dialog',
  standalone: true,
  imports: [MatDialogModule, FormsModule, NgIf],
  templateUrl: './login-dialog.component.html',
  styleUrl: './login-dialog.component.css'
})
export class LoginDialogComponent {


  loginObj: loginClass = new loginClass()

  constructor(private _snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<LoginDialogComponent>,
    private authService: AuthService,
    public btnService: BtnService) { }

  onLogin(form: any) {
    if (form.valid) {
      const isLoggedIn = this.authService.login(this.loginObj.Email, this.loginObj.password)

      if (isLoggedIn) {
        this.dialogRef.close();
        this._snackBar.open("Login Succesfull", 'close');
        this.btnService.hideLoginButton()
        this.btnService.hideSignupButton()
        this.btnService.showLogoutButton()
      } else {
        this.loginObj = new loginClass();
        alert("Invalid username and Password")
      }
    } else {
      this._snackBar.open("Please fill Valid data!!", 'Okay')
    }
  }

}

export class loginClass {
  Email: string = '';
  password: string = '';
}