// Ashish N U
// 25 October 2024

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { motorcycles } from '../../motorcycles';
import { helmets } from '../../helmets';
import { BookingForm } from '../../BookingForm ';

@Injectable({
  providedIn: 'root'
})
export class YamahaServiceService {

  constructor(private http: HttpClient) { }

  private _url: string = 'http://localhost:64621/yamaha/'
  getMotorCycles(): Observable<motorcycles[]> {
    return this.http.get<motorcycles[]>(`${this._url}getMotorcycles`)
  }

  getScooters(): Observable<motorcycles[]> {
    return this.http.get<motorcycles[]>(`${this._url}getScooters`)
  }

  getHelmets(): Observable<helmets[]> {
    return this.http.get<helmets[]>(`${this._url}getHelmets`)
  }

  insertBookingDetails(item: BookingForm): Observable<BookingForm[]> {
    return this.http.post<BookingForm[]>(`${this._url}insertBookingDetails`, item)
  }

  getUserRecords(): Observable<BookingForm[]> {
    return this.http.get<BookingForm[]>(`${this._url}getRecords`)
  }

  deleteUser(Id: number): Observable<BookingForm[]> {
    return this.http.delete<BookingForm[]>(`${this._url}delete`, { body: { Id } })
  }

  updateUser(item:BookingForm):Observable<BookingForm[]>{
    return this.http.post<BookingForm[]>(`${this._url}update`,item)
  }
}
