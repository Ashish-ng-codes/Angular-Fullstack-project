// Ashish N U
// 25 October 2024

import { Component, } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list'
import { CommonModule, NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { BikeDetailsServiceService } from '../services/bike-details-service.service';
import { motorcycles } from '../motorcycles';
import { HttpClientModule } from '@angular/common/http';
import { YamahaServiceService } from '../services/http-services/yamaha-service.service';
import { response } from 'express';


@Component({
  selector: 'app-sccoters-component',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,MatGridListModule,CommonModule,NgFor,MatIconModule,RouterLink,HttpClientModule],
  templateUrl: './sccoters-component.component.html',
  styleUrl: './sccoters-component.component.css'
})
export class SccotersComponentComponent {

  Scooters:motorcycles[]=[]
  
  constructor(private bikeService: BikeDetailsServiceService,private scooterService:YamahaServiceService){
   this.scooterService.getScooters().subscribe(response=>{
    this.Scooters=response;
   })
  }
  
   details(items: any){
    this.bikeService.setItem(items)
    console.log(items)
   }

   
}
