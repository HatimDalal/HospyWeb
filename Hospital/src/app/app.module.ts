import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { RouterModule } from '@angular/router';
import { DoctorserviceService } from './doctorservice.service';
import { DoctorComponent } from './doctor/doctor.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BookingAppointmentComponent } from './booking-appointment/booking-appointment.component';
import { BookingService } from './booking.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DoctorComponent,
    BookingAppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,

    RouterModule.forRoot([
      {path: '', component:NavBarComponent},
      {path:'Doctors',component:DoctorComponent},
      {path:'Booking',component:BookingAppointmentComponent}
    ])
  ],
  providers: [BookingService,DoctorserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
