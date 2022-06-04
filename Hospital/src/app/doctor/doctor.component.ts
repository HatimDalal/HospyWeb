import { Component, OnInit } from '@angular/core';
import { doctor } from 'doctor';
import { DoctorserviceService } from '../doctorservice.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  result:doctor[]=[];

  constructor(private doc:DoctorserviceService){ }

  ngOnInit(): void {
    this.doc.getAll().subscribe((data:doctor[])=>{
      for(var i=0; i<data.length; i++){
        let dc:doctor={
          name:data[i].name,
          degree:data[i].degree,
          time:data[i].time
        };
        this.result.push(dc);
        console.log(this.result);
      }
    });
  }
}
