// Ashish N U
// 25 October 2024

import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { AuthService } from '../../services/authService/auth.service';
import { BtnService } from '../../services/btnServices/btn.service';

@Component({
  selector: 'app-logout-dialog',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './logout-dialog.component.html',
  styleUrl: './logout-dialog.component.css'
})
export class LogoutDialogComponent {

  constructor(private authService:AuthService,public btnService:BtnService){}

  loggedOut(){
    const isLoggedOut=this.authService.logOut()
    if(!isLoggedOut){
      this.btnService.showLoginButton();
      this.btnService.showSignupButton();
      this.btnService.hideLogoutButton();
    }
  }
}
