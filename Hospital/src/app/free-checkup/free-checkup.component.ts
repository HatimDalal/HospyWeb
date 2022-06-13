import { Component, OnInit } from '@angular/core';
import {uid} from '../connect/uid.js'

@Component({
  selector: 'app-free-checkup',
  templateUrl: './free-checkup.component.html',
  styleUrls: ['./free-checkup.component.css']
})
export class FreeCheckupComponent implements OnInit {  

  id = uid();
  

  constructor() {
    console.log(this.id);
   }

  ngOnInit(): void {
  }
   
}
