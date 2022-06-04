import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BookingAppointmentComponent } from './booking-appointment/booking-appointment.component';
import { BookingService } from './booking.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BookingAppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component:NavBarComponent},
      {path:'',component:BookingAppointmentComponent}
    ])
  ],
  providers: [BookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
