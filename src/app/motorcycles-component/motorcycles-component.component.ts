// Ashish N U
// 25 October 2024

import { Component, } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list'
import { CommonModule, NgFor } from '@angular/common';
import {MatIconModule} from '@angular/material/icon'
import { Router, RouterLink } from '@angular/router';
import { BikeDetailsComponentComponent } from '../bike-details-component/bike-details-component.component';
import { BikeDetailsServiceService } from '../services/bike-details-service.service';
import { HttpClientModule } from '@angular/common/http';
import { motorcycles } from '../motorcycles';
import { YamahaServiceService } from '../services/http-services/yamaha-service.service';
import { response } from 'express';



@Component({
  selector: 'app-motorcycles-component',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,MatGridListModule,CommonModule,NgFor,MatIconModule,RouterLink,HttpClientModule,BikeDetailsComponentComponent],
  templateUrl: './motorcycles-component.component.html',
  styleUrl: './motorcycles-component.component.css'
})
export class MotorcyclesComponentComponent {

  motorCyclesList:motorcycles[]=[]
    
    
  constructor(private bikeService: BikeDetailsServiceService,private yamahaService:YamahaServiceService){

    this.yamahaService.getMotorCycles().subscribe(response=>{
    this.motorCyclesList=response
    })
  }
   details(items: any){
    this.bikeService.setItem(items)
  }
}
  
