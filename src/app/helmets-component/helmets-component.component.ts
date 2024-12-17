// Ashish N U
// 25 October 2024

import { Component, Input, } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list'
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { BikeDetailsServiceService } from '../services/bike-details-service.service';
import { Router, RouterLink } from '@angular/router';
import { YamahaServiceService } from '../services/http-services/yamaha-service.service';
import { response } from 'express';
import { helmets } from '../helmets';


@Component({
  selector: 'app-helmets-component',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,MatGridListModule,CommonModule,NgFor,NgIf,RouterLink],
  templateUrl: './helmets-component.component.html',
  styleUrl: './helmets-component.component.css'
})
export class HelmetsComponentComponent {

  selectedHelmet:any = [];

  showBookButton:boolean=false;
  showSkipButton:boolean=true;

  helmets:helmets[]=[]

  constructor(private _bikeService:BikeDetailsServiceService,private router:Router,private helmetService:YamahaServiceService){
    this.helmetService.getHelmets().subscribe(response=>{
      this.helmets=response
    })
  }

  addHelmet(item:{ imgSrc: string; name: string; price: number }){

    if (this.selectedHelmet.length > 0) {
      const previouslySelectedHelmet = this.selectedHelmet[0];
      this.removeHelmet(previouslySelectedHelmet);
    }

    this._bikeService.setHelmet(item)
    this.selectedHelmet=this._bikeService.getHelmet()
    this._bikeService.costManager(item.price)
    this.showBookButton = true; // Show Book button when a helmet is added
    this.showSkipButton = false; // Hide Skip button
  }

  removeHelmet(item: { price: number }) {
    this.selectedHelmet = this.selectedHelmet.filter((helmet:{price:number}) => helmet.price !== item.price);
    this._bikeService.removeCost(item.price);
    this._bikeService.removeHelmet()
    if (this.selectedHelmet.length === 0) {
      this.showBookButton = false; // Hide Book button if no helmets are selected
      this.showSkipButton = true;  // Show Skip button
    }
  }

  isSelected(item: { price: number }): boolean {
     return this.selectedHelmet.length > 0 && this.selectedHelmet[0].price === item.price;
  }

  book(){
    this.router.navigate(['/booking'], { replaceUrl: true });
  }
    
}

