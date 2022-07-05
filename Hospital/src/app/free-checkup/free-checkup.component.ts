import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { uid } from '../connect/uid.js';
import { FreeCheckup } from '../models/UI-Models/freeCheckup.js';
import { FreecheckupService } from './freecheckup.service';
import * as _moment from 'moment';


// import { ReCaptcha2Component } from 'ngx-captcha';

@Component({
  selector: 'app-free-checkup',
  templateUrl: './free-checkup.component.html',
  styleUrls: ['./free-checkup.component.css'],
})
export class FreeCheckupComponent implements OnInit {
  // protected aFormGroup: FormGroup
  // @ViewChild('captchaElem') captchaElem: ReCaptcha2Component;
  // @ViewChild('langInput') langInput: ElementRef;

  // public captchaIsLoaded = false;
  // public captchaSuccess = false;
  // public captchaIsExpired = false;
  // public captchaResponse?: string;

  // public theme: 'light' | 'dark' = 'dark';
  // public size: 'compact' | 'normal' = 'normal';
  // public lang = 'en';
  // public type: 'image' | 'audio';

  // For Date Picker. 

  id = uid();
  newid = this.id.replace('function now() { [native code] }', '');
  // placeholder;
  clicked = false;
  freecheckup: FreeCheckup = {
    id: this.newid,
    name: '',
    email: '',
    phone: '',
    date: '',
  };

  // key:string;

  onAdd(): void {
    this.freecheckupService.addFreeCheckup(this.freecheckup).subscribe(
      (successResponse) => {
        console.log(successResponse);
        // this.snackbar.open('Free Checkup Booked Successfully.', undefined,{
        //   duration:2000
        // });
      },
      (errorResponse) => {
        // Log
        // console.log(errorResponse);
      }
    );
  }

  idgetter() {
    if (
      !confirm(
        `Clicking "Ok" will generate a SecretKey. Please share at reception.`
      )
    )
      return;
    {
      alert(`This is your secret code - ${this.newid}`);
      localStorage.setItem('key', this.newid);
      this.placeholder = 'This is your Secretkey - ';
      this.key = localStorage.getItem('key');
    }
  }
  key = localStorage.getItem('key');
  placeholder = 'Save your last appointment key before creating a new one: ';

  actionMethod() {}

  @ViewChild('freeCheckupDetailsForm') freeCheckupDetailsForm?: NgForm;

  captcha: string;
  resolved(captchaResponse: string) {
    this.captcha = captchaResponse;
    console.log('resolved captcha with response =' + this.captcha);
  }

  constructor(
    private freecheckupService: FreecheckupService /*,fd:FormBuilder*/
  ) {
    // console.log(this.id);
    this.captcha = '';
  }
  ngOnInit() {
    // this.aFormGroup = this.fd.group({
    //   recaptcha: ['', Validators.required]
    // });
    // const moment = _moment;
    // admDateRange: {
    //   startDate: moment([2020, 5, 1]),  //yyyy, mm, dd
    //   endDate: moment([2020, 5, 25])
    // } 
    
    
  }
}
