// Ashish N U
// 25 October 2024

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BikeDetailsServiceService } from '../services/bike-details-service.service';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list'
import { CommonModule, NgFor } from '@angular/common';
import {MatIconModule} from '@angular/material/icon'
import { Router, RouterLink } from '@angular/router';
import { HelmetsComponentComponent } from '../helmets-component/helmets-component.component';
import { motorcycles } from '../motorcycles';

@Component({
  selector: 'app-bike-details-component',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,MatGridListModule,CommonModule,MatIconModule,NgFor,RouterLink,HelmetsComponentComponent],
  templateUrl: './bike-details-component.component.html',
  styleUrl: './bike-details-component.component.css'
})
export class BikeDetailsComponentComponent implements OnInit {

  constructor(private _bikeService:BikeDetailsServiceService,private router:Router){}
  toBeExploreItems:any=[]


   ngOnInit():void{
      this.toBeExploreItems=this._bikeService.getItem()
   }

   back(){
    this.router.navigate(['/motorcycles'])
   }

   addingBike(item:{price:number}){
    alert("Selected Bike addedd")
    this._bikeService.costManager(item.price)
   } 
}
