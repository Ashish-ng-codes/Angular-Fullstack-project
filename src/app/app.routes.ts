// Ashish N U
// 25 October 2024

import { Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { MotorcyclesComponentComponent } from './motorcycles-component/motorcycles-component.component';
import { SccotersComponentComponent } from './sccoters-component/sccoters-component.component';
import { HelmetsComponentComponent } from './helmets-component/helmets-component.component';
import { BookingComponentComponent } from './booking-component/booking-component.component';
import { BikeDetailsComponentComponent } from './bike-details-component/bike-details-component.component';
import { LoginDialogComponent } from './Dialogs/login-dialog/login-dialog.component';
import { authGuard } from './auth.guard';
import { canDeactivateGaurdsGuard } from './can-deactivate-gaurds.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path:"home",
        loadComponent:()=>import('./home-component/home-component.component').then(c=>c.HomeComponentComponent)
    },
    {
        path:"motorcycles",
        loadComponent:()=>import('./motorcycles-component/motorcycles-component.component').then(c=>c.MotorcyclesComponentComponent),
        canActivate:[authGuard]
    },
    {
        path:"helmets",
        loadComponent:()=>import('./helmets-component/helmets-component.component').then(c=>c.HelmetsComponentComponent), 
        canActivate:[authGuard]
    },
    {
        path:"scooters",
        loadComponent:()=>import('./sccoters-component/sccoters-component.component').then(c=>c.SccotersComponentComponent),
        canActivate:[authGuard]
    },
    {
        path:"booking",
        loadComponent:()=>import('./booking-component/booking-component.component').then(c=>c.BookingComponentComponent),
        canActivate:[authGuard],
        canDeactivate:[canDeactivateGaurdsGuard]
        
    },
    {
        path:"bikeDetails",
        loadComponent:()=>import('./bike-details-component/bike-details-component.component').then(c=>c.BikeDetailsComponentComponent),
        canActivate:[authGuard]
        
    },
    {
        path:"login",
       loadComponent:()=>import('./Dialogs/login-dialog/login-dialog.component').then(c=>c.LoginDialogComponent)
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
