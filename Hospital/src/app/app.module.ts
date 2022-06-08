import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
=======

>>>>>>> ec9137f2270125b115a8787124b5c7313bc94968
import { RouterModule } from '@angular/router';
import { DoctorserviceService } from './doctorservice.service';
import { DoctorComponent } from './doctor/doctor.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BookingAppointmentComponent } from './booking-appointment/booking-appointment.component';
import { BookingService } from './booking.service';
import { AddPateintComponent } from './add-pateint/add-pateint.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
<<<<<<< HEAD
    BookingAppointmentComponent,
    AddPateintComponent
=======
    DoctorComponent,
    BookingAppointmentComponent
>>>>>>> ec9137f2270125b115a8787124b5c7313bc94968
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

    RouterModule.forRoot([
      {path: '', component:NavBarComponent},
<<<<<<< HEAD
      {path:'',component:BookingAppointmentComponent},
      {path:'',component:AddPateintComponent}
=======
      {path:'Doctors',component:DoctorComponent},
      {path:'Booking',component:BookingAppointmentComponent}
>>>>>>> ec9137f2270125b115a8787124b5c7313bc94968
    ])
  ],
  providers: [BookingService,DoctorserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
