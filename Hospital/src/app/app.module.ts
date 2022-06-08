import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BookingAppointmentComponent } from './booking-appointment/booking-appointment.component';
import { BookingService } from './booking.service';
import { AddPateintComponent } from './add-pateint/add-pateint.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BookingAppointmentComponent,
    AddPateintComponent
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
      {path:'',component:BookingAppointmentComponent},
      {path:'',component:AddPateintComponent}
    ])
  ],
  providers: [BookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
