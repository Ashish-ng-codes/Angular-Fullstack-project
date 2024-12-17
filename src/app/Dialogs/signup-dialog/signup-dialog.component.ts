// Ashish N U
// 25 October 2024

import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormsModule, NgModel } from '@angular/forms';
import { NgIf } from '@angular/common';
import { json } from 'stream/consumers';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';


@Component({
  selector: 'app-signup-dialog',
  standalone: true,
  imports: [MatDialogModule, FormsModule, NgIf],
  templateUrl: './signup-dialog.component.html',
  styleUrl: './signup-dialog.component.css'
})
export class SignupDialogComponent {

  signupObj: signupClass = new signupClass();

  constructor(private _snackBar: MatSnackBar, private dialog: MatDialog, private dialogRef: MatDialogRef<SignupDialogComponent>) { }

  onSignup(form: any) {
    const localUsers = localStorage.getItem('users');
    if (form.valid) {
      const users = localUsers ? JSON.parse(localUsers) : [];

      // Check if the user already exists
      const userExists = users.some((user: { email: string, password: string }) => user.email === this.signupObj.email && user.password === this.signupObj.password);

      if (userExists) {
        this._snackBar.open("User already exists..Please Login!!!", 'Okay');
        this.dialogRef.close();
        this.dialog.open(LoginDialogComponent)
      } else {
        users.push(this.signupObj);
        localStorage.setItem('users', JSON.stringify(users));

        this.dialogRef.close()
        this._snackBar.open("Registered Successfully", 'close');

      }
      // Reset the signup object
      this.signupObj = new signupClass();
    }
    else {
      this._snackBar.open("Please fill in the valid details", 'Okay');
    }
  }
}


export class signupClass {
  username: string = '';
  email: string = '';
  password: string = '';
}
