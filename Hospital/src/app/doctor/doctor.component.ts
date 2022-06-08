import { Component, OnInit } from '@angular/core';
import { doctor } from 'doctor';
import { DoctorserviceService } from '../doctorservice.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css'],
})
export class DoctorComponent implements OnInit {
  Result: doctor[] = [];
  filteredDocs: any;
  subscription: Subscription;

  constructor(private doc: DoctorserviceService) {
    this.subscription = this.doc
      .getAll()
      .subscribe((Result) => (this.filteredDocs = this.Result = Result));
  }

  filter(query: string) {
    // console.log(query);
    this.filteredDocs = query
      ? this.Result.filter((p) =>
          p.name.toLowerCase().includes(query.toLowerCase())
        )
      : this.Result;
  }

  ngOnInit(): void {
    // this.doc.getAll().subscribe((data: doctor[]) => {
    //   for (var i = 0; i < data.length; i++) {
    //     let dc: doctor = {
    //       name: data[i].name,
    //       degree: data[i].degree,
    //       time: data[i].degree,
    //     };
    //     this.Result.push(dc);
    //     console.log(this.Result);
    //   }
    // });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
