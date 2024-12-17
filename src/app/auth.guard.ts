// Ashish N U
// 25 October 2024

import { inject } from '@angular/core';
import { CanActivateFn,Router } from '@angular/router';
import { AuthService } from './services/authService/auth.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginDialogComponent } from './Dialogs/login-dialog/login-dialog.component';
import { SignupDialogComponent } from './Dialogs/signup-dialog/signup-dialog.component';
import { LogoutDialogComponent } from './Dialogs/logout-dialog/logout-dialog.component';


export const authGuard: CanActivateFn = (route, state) => {

  const _authService=inject(AuthService);
  const dialogRef=inject(MatDialog)
  
  if(_authService.isAuthenticated()){
    return true;
  }
  else{
    alert("Please Regisrer & Login to Access")
    dialogRef.open(LoginDialogComponent)
    return false;
  }

};
