import { Component, NgZone, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';
import { EmailValidator, FormBuilder, FormGroup,FormControl,FormArray, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ActivatedRoute,Router} from '@angular/router';
import { inject } from '@angular/core/testing';
//import { inject } from '@angular/core/testing';


@Component({
  selector: 'app-booking-appointment',
  templateUrl: './booking-appointment.component.html',
  styleUrls: ['./booking-appointment.component.css']
})
export class BookingAppointmentComponent implements OnInit {
 
  bookingform!:FormGroup;
  Result:Booking[]=[];
 
 // bk!:Booking;
  //isLoaded:Boolean=false;

  constructor(private book:BookingService,private router:Router,private FormBuilder:FormBuilder, private ngZone:NgZone) {
  }

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
       

      


      delete(Appointmentid:Booking[],i:any) {
        console.log(Appointmentid);
        if(window.confirm('Do you want to go ahead?')) {
           this.book.deletedata(Appointmentid)
          //.subscribe((res) => {
           // this.bookingform.splice(i, 1);
          // })
        }
      }


    // deletedata(Appointmentid:Booking[],i:any){
    //   console.log(Appointmentid,'deletedata==>');
    //   this.book.deletedata(Appointmentid)//.subscribe((res)=>{
    //     console.log(Appointmentid,'deletedata==>');
    //     //this.success msg=res.message;

    //   };
     
  //   //   // observable.subscribe((response) =>
  //   //   // console.log(response)
  //   // )
  //     }

  // 
  




  // onUpdate(): any {
  //   this.book.updateInfo(this.getId, this.updateForm.value);
  //   .subscribe(() => {
  //       console.log('Data updated successfully!')
  //       this.ngZone.run(() => this.router.navigateByUrl('/Appointment'))
  //     }, (err) => {
  //       console.log(err);
  //   });
  // }
      
    

  
       
}