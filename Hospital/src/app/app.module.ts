import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
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
import { SearchDoctorComponent } from './search-doctor/search-doctor.component';

// import {Ng2SearchPipe, Ng2SearchPipeModule} from 'ng2-search-filter';
import { AddPateintComponent } from './add-pateint/add-pateint.component';
import { HomeComponent } from './home/home.component';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { FreeCheckupComponent } from './free-checkup/free-checkup.component';

import { AuthComponent } from './auth/auth.component';
import { OnlineConsultComponent } from './online-consult/online-consult.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Add below imports to the Imports Section on the top of the page

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// Material Navigation
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
// Material Layout
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
// Material Buttons & Indicators
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
// Material Popups & Modals
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
// Material Data tables
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
// import {MatMomentDateModule} from 'moment';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

import { AllFreeCheckupsComponent } from './admin/all-free-checkups/all-free-checkups.component';
import { AllDoctorsComponent } from './admin/all-doctors/all-doctors.component';
import { NgxCaptchaModule } from "ngx-captcha";
import{RecaptchaModule} from 'ng-recaptcha'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BookingAppointmentComponent,
    AddPateintComponent,
    DoctorComponent,
    BookingAppointmentComponent,
    SearchDoctorComponent,
    BookingAppointmentComponent,
    HomeComponent,
    NewAppointmentComponent,
    FooterComponent,
    AboutUsComponent,
    OurServicesComponent,
    FreeCheckupComponent,
    AuthComponent,
    OnlineConsultComponent,
    LoadingSpinnerComponent,
    AllFreeCheckupsComponent,
    AllDoctorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RecaptchaModule,
    // Add below modules to the imports array 

MatMomentDateModule,
MatAutocompleteModule,
MatCheckboxModule,
MatDatepickerModule,
MatNativeDateModule,
MatFormFieldModule,
MatInputModule,
MatRadioModule,
MatSelectModule,
MatSliderModule,
MatSlideToggleModule,
MatMenuModule,
MatSidenavModule,
MatToolbarModule,
MatCardModule,
MatDividerModule,
MatExpansionModule,
MatGridListModule,
MatListModule,
MatStepperModule,
MatTabsModule,
MatTreeModule,
MatButtonModule,
MatButtonToggleModule,
MatBadgeModule,
MatChipsModule,
MatIconModule,
MatProgressSpinnerModule,
MatProgressBarModule,
MatRippleModule,
MatBottomSheetModule,
MatDialogModule,
MatSnackBarModule,
MatTooltipModule,
MatPaginatorModule,
MatSortModule,
MatTableModule,
NgxCaptchaModule,
    

    RouterModule.forRoot([
      // {path: '', component:NavBarComponent},
      {path:'Doctors',component:DoctorComponent},
      {path:'All-Appointments',component:BookingAppointmentComponent},
      {path:'Add-Patient',component:AddPateintComponent},
      {path:'',component:HomeComponent},
      {path:'New-Appointment',component:NewAppointmentComponent},
      {path:'About-Us',component:AboutUsComponent},
      {path:'Our-Services',component:OurServicesComponent},
      {path:'Free-Checkup',component:FreeCheckupComponent}
    ]),

    BrowserAnimationsModule
  ],
  providers: [BookingService,DoctorserviceService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
