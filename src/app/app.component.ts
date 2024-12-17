import { Component } from '@angular/core';
import { RouterOutlet,RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import {MatToolbarModule} from '@angular/material/toolbar'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponentComponent,RouterLink,MatToolbarModule,RouterLinkActive,RouterModule],
  templateUrl: './app.component.html', 
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Yamaha-Adventure-Access';

}
