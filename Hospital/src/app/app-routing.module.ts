import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingAppointmentComponent } from './booking-appointment/booking-appointment.component';

const routes: Routes = [
  {path:'Booking-Appointment',component:BookingAppointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
