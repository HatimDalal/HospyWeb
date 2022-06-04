import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';


@Component({
  selector: 'app-booking-appointment',
  templateUrl: './booking-appointment.component.html',
  styleUrls: ['./booking-appointment.component.css']
})
export class BookingAppointmentComponent implements OnInit {
  Result:Booking[]=[];

  constructor(private book:BookingService) { }

  ngOnInit(): void {
    this.book.getAll().subscribe((data:Booking[])=>{
        for(var i=0;i<data.length;i++){
           let ba:Booking={
             Appointmentid:data[i].Appointmentid,
             Fullname:data[i].Fullname,
              Phone:data[i].Phone,
              Email:data[i].Email,
              Age: data[i].Age,
              Appointmentdate:data[i].Appointmentdate,
              Appointmenttime:data[i].Appointmenttime

             
            };
            this.Result.push(ba);
            console.log(this.Result);
          }
       });
      }

  }


