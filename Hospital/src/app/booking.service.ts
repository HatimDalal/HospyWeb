import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from './booking';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) { }
  getAll():Observable<Booking[]> {

    let baseurl = 'http://localhost:3000/Appointment';
    return this.http.get<Booking[]>(baseurl);
     }

}
