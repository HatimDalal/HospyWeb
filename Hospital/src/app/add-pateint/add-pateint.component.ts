import { Component, OnInit,NgZone } from '@angular/core';
import { FormGroup, FormBuilder , Validators } from '@angular/forms';
import { BookingService } from '../booking.service';
import { ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-add-pateint',
  templateUrl: './add-pateint.component.html',
  styleUrls: ['./add-pateint.component.css']
})
export class AddPateintComponent implements OnInit {
  
  bookingform!:FormGroup;
  submitted = false;

  constructor(private book:BookingService,private router:Router,private FormBuilder:FormBuilder, private ngZone:NgZone) { }

  ngOnInit(): void {this.bookingform = this.FormBuilder.group({
    Fullname:['',Validators.required],
    Phone:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
    Email:['',[Validators.required,Validators.email]],
    Age:['',[Validators.required,Validators.minLength(2),Validators.maxLength(2)]],
    // Appointmentdate:['',[Validators.required,Validators.minLength(3),Validators.maxLength(3)]],
    // Appointmentdate:['',Validators.required]
  })
  

  }  
  onSubmit(){
    this.book.createdata(this.bookingform.value);
    //.subscribe(()=>{
      console.log('Data added successfully!')
      this.ngZone.run(()=>this.router.navigateByUrl('/Appointment1'))
     }  

}
