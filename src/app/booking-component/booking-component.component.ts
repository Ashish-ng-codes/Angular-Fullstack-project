// Ashish N U
// 25 October 2024

import { Component, OnInit,OnChanges, ViewChild,AfterViewInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list'
import { BikeDetailsServiceService } from '../services/bike-details-service.service';
import { BookingForm } from '../BookingForm ';
import { response } from 'express';
import {MatTableModule} from '@angular/material/table'
import { DatePipe , CurrencyPipe} from '@angular/common';
import { YamahaServiceService } from '../services/http-services/yamaha-service.service';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableDataSource } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { MatSortModule } from '@angular/material/sort';
import { MatSort } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';



@Component({
  selector: 'app-booking-component',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatCardModule, MatSelectModule, MatAutocompleteModule, CommonModule,
    NgFor, FormsModule, MatCheckboxModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatGridListModule,
    NgIf,MatTableModule,DatePipe,CurrencyPipe,MatIconModule,MatMenuModule,RouterLink,MatSortModule,MatSort,MatPaginatorModule,
    MatPaginator,
  ],
  templateUrl: './booking-component.component.html',
  styleUrl: './booking-component.component.css'
})
export class BookingComponentComponent implements OnInit {

  

  // pincodes: number[] = [577102, 573131, 560065, 577112]
  cityPincodeMap:any = {
    Bangalore: '560001',
    Mangalore: '575001',
    Mysore: '570001',
    Hassan: '573201',
    Chikkamagaluru: '577101',
    Belagavi: '590001',
    Hubli: '580020',
    Dharwad: '580008',
    Kodagu: '571201',
    Bidar: '585401',
    UttaraKannada: '581326',
    Kolar: '563101',
    Chitradurga: '577501',
    Bellary: '583101',
    Shivamogga: '577201',
    Tumakuru: '572101',
    Chikkaballapur: '562101',
    DakshinaKannada: '574401',
    Bengaluru_Rural: '562110',
    Chamarajanagar: '571313',
    Davanagere: '577001',
    Gadag: '582101',
    Haveri: '581110',
    Koppal: '583234',
    Raichur: '584101',
    Ramanagara: '562159',
    Uttara_Kannada: '581326',
    Yadgir: '585201',
    Mandya: '571401',
  };


  dataSource=new MatTableDataSource()
  formChanged: boolean = false;

  // @ViewChild(MatSort) sort!:MatSort;
  // @ViewChild(MatPaginator) paginator!:MatPaginator;
 
  selectedHelmet:any=[]
  selectedBike:any=[]

  formsDetails: BookingForm[] = []
  user: BookingForm = new BookingForm()

  showTable:boolean=false;
  showForm:boolean=true;
  showViewButton:boolean=false;
  showBookButton:boolean=true;
  showUpdateButton:boolean=false;
  showBackButton:boolean=false;
  backToHomeButton:boolean=false;
  showClearButton:boolean=true;



  constructor(private motorcycleService: BikeDetailsServiceService,private yamahaService:YamahaServiceService) { }

  ngOnInit(){
    this.user.TotalCost=this.motorcycleService.totalCost()
    this.selectedBike=this.motorcycleService.getItem()
    this.user.Vehicle=this.getMotocycleName()
    this.selectedHelmet=this.motorcycleService.getHelmet()
    this.user.Helmet=this.getHelmetName()
    // this.viewRecords();
    // console.log("called")
  }

  // ngAfterViewInit(){
  //   this.dataSource.sort=this.sort;
  //   this.dataSource.paginator=this.paginator;
  // }

   getMotocycleName(){
   return this.selectedBike.map((obj: { name: string; })=>obj.name).join(', ')
   } 

   getHelmetName(){
     return this.selectedHelmet.map((obj: { name: string; })=>obj.name).join(', ')
   }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.yamahaService.insertBookingDetails(form.value).subscribe(()=>{
      this.showViewButton=true;
      this.showForm=false;
      this.formChanged=true;
      this.user=new BookingForm();
      alert("Booking Successfull!!")
      this.viewRecords()
      })
    }
    else {
      alert("Please fill required fields")
    }
  }


  viewRecords(){
     this.yamahaService.getUserRecords().subscribe((response)=>{
      this.formsDetails=response
      this.dataSource.data=this.formsDetails;

      this.showTable=true;
      this.showForm=false;
      this.showViewButton=false;
      this.showBackButton=true;
    })
  }

  displayedColumns: string[] = [
    'Id','firstName', 'lastName', 'email', 'gender',
    'pincode', 'city', 'vehicle', 'helmet',
    'licenseType', 'bookingDate', 'phoneNumber',
    'totalCost','Actions'
  ];

  onFormChange() {
    this.formChanged = true; // Set this to true whenever the form changes
    this.updatePincode();
  }
  hasUnsavedChanges(): boolean {
    return this.formChanged; // Return true if there are unsaved changes
  }
 
  updatePincode() {
    this.user.Pincode = this.cityPincodeMap[this.user.City] || '';
  }

  //deleting Record
  delete(item: BookingForm) {
    const confirmation = confirm("Are you sure you want to delete this record?");
    if (confirmation) {
      this.yamahaService.deleteUser(item.Id).subscribe(() => {
        const index = this.formsDetails.findIndex(user => user.Id === item.Id);
        if (index !== -1) {
          this.formsDetails.splice(index, 1);
          this.dataSource.data=this.formsDetails
          alert("Record Deleted.");
        }
      }, error => {
        alert("An error occurred while deleting the record.");
      });
    }
  }
  

  //Editing
  selectedUser:any

  edit(item:any){
    this.selectedUser=item;
    console.log(this.selectedUser)
    this.user.FirstName = item.firstName;
    this.user.LastName = item.lastName;
    this.user.Email = item.email;
    this.user.Gender = item.gender;
    this.user.Pincode = item.pincode;
    this.user.City = item.city;
    this.user.Vehicle = item.vehicle;
    this.user.Helmet = item.helmet;
    this.user.LicenseType = item.licenseType;
    this.user.PhoneNumber = item.phoneNumber;
    this.user.BookingDate = item.bookingDate;
    this.user.TotalCost = item.totalCost;
    

    this.showUpdateButton=true;
    this.showBackButton=true;
    this.showBookButton=false;
    this.showClearButton=false;
    this.showForm=true;
    this.showTable=false;
    this.backToHomeButton=false;
   
  }

  update(){
    const updatedUser: any = {
      Id: this.selectedUser.Id, 
      firstName: this.user.FirstName,
      lastName: this.user.LastName,
      email: this.user.Email,
      gender: this.user.Gender,
      pincode: this.user.Pincode,
      city: this.user.City,
      vehicle: this.user.Vehicle,
      helmet: this.user.Helmet,
      licenseType: this.user.LicenseType,
      phoneNumber: this.user.PhoneNumber,
      bookingDate: this.user.BookingDate,
      totalCost: this.user.TotalCost
    };

    this.showViewButton=false;  

    this.yamahaService.updateUser(updatedUser).subscribe(()=>{
      const index=this.formsDetails.findIndex(u=>u.Id===this.selectedUser.Id)
      console.log(index)
      if(index!==-1){ 
        this.formsDetails[index]=updatedUser
        this.backToTable()
      }
    })
  }

  backToTable(){
   this.showTable=true;
   this.showForm=false;
   this.showViewButton=false;
   this.backToHomeButton=true;  
  }

  ResetFormFields(){
    this.user=new BookingForm()
    this.motorcycleService.removeHelmet();
    this.motorcycleService.selectedItem=[];
    this.motorcycleService.resetCost();
  }
} 
