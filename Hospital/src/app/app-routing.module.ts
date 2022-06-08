import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { AddPateintComponent } from './add-pateint/add-pateint.component';
import { BookingAppointmentComponent } from './booking-appointment/booking-appointment.component';

const routes: Routes = [
  {path:'Booking-Appointment',component:BookingAppointmentComponent},
  {path:'Add-Patient',component:AddPateintComponent}
];
=======


const routes: Routes = [];
>>>>>>> ec9137f2270125b115a8787124b5c7313bc94968

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
