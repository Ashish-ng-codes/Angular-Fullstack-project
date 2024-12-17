// Ashish N U
// 25 October 2024

import { Injectable } from '@angular/core';
import { motorcycles } from '../motorcycles';
import { helmets } from '../helmets';

@Injectable({
  providedIn: 'root'
})
export class BikeDetailsServiceService {

  constructor() { }

  selectedItem:motorcycles[]=[]
  totalcost:number=0
  selectedHelmet:any=[]

  setItem(items:any[]){
    this.selectedItem=items
  }

  getItem(){
    return this.selectedItem?[this.selectedItem]:null
  }

 setHelmet(item:{ imgSrc: string; name: string; price: number }){
  this.selectedHelmet=item
 }

  getHelmet(){
    return this.selectedHelmet?[this.selectedHelmet]:null
  }
  removeHelmet(){
    this.selectedHelmet=[]
  }

  costManager(price:number){
    this.totalcost+=price
  }

  removeCost(price:number){
    this.totalcost-=price
  }

  totalCost(){
    return this.totalcost
  }

  resetCost(){
    this.totalcost=0;
  }
}
