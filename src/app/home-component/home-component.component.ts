// Ashish N U
// 25 October 2024

import {  Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog} from '@angular/material/dialog';
import { LoginDialogComponent } from '../Dialogs/login-dialog/login-dialog.component';
import { SignupDialogComponent } from '../Dialogs/signup-dialog/signup-dialog.component';
import { NgIf } from '@angular/common';
import { AuthService } from '../services/authService/auth.service';
import { LogoutDialogComponent } from '../Dialogs/logout-dialog/logout-dialog.component';
import { BtnService } from '../services/btnServices/btn.service';


@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [MatDialogModule,FormsModule,LoginDialogComponent,SignupDialogComponent,NgIf],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent  {

  constructor(public dialog:MatDialog,public btnService:BtnService){
  
   }
  

  openSignupDialog(){
      this.dialog.open(SignupDialogComponent)
  }

  openLoginDialog(){
    this.dialog.open(LoginDialogComponent)
  }

  openLogoutDialog(){
    this.dialog.open(LogoutDialogComponent)
  }
}

