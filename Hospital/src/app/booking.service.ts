import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from './booking';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<Booking[]> {
    let baseurl = 'http://localhost:3000/Appointment';
    return this.http.get<Booking[]>(baseurl);
  }

  delete(Appointmentid): Observable<Booking[]> {
    let baseurl = 'http://localhost:3000/Appointment';
    return this.http.delete<Booking[]>(baseurl + Appointmentid);
  }

  get(Appointmentid) {
    let baseurl = 'http://localhost:3000/Appointment';
    return this.http.head<Booking[]>(baseurl + Appointmentid);
  }

  postAPIData() {
    return this.http.post('/api/Bookingnew', {});
  }

  // createdata(){
  //   return.this.http.post('/api/Appointment',{})

  // }

  createdata(
    data: Booking[] //Observable<any>
  ) {
    //let bsurl = 'http://localhost:3000/Appointment';

    console.log(data, 'createapi=>');
    this.http.post<Booking[]>('http://localhost:3000/Appointment1', data);
    // return this.http.post<Booking[]>(`${this.bsurl}`, data);
    //return observable;
  }

  // createdata(){
  //   return this.http.post('/api/Appointment', {'FullName' : 'Code', })

  // }

  deletedata(Appointmentid: Booking[]) {
    console.log(Appointmentid);
    this.http.put<Booking[]>(
      'http://localhost:3000/Appointment',
      Appointmentid
    );
  }

  //Update information
  updateInfo(data: Booking[]) {
    console.log(data);
    this.http.put<Booking[]>('http://localhost:3000/Appointment', data);
  }
}
