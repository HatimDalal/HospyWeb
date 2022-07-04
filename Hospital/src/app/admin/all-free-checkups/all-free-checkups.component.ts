import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { filter } from 'cypress/types/lodash';
import { FreecheckupService } from 'src/app/free-checkup/freecheckup.service';
import { FreeCheckup } from 'src/app/models/UI-Models/freeCheckup';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-all-free-checkups',
  templateUrl: './all-free-checkups.component.html',
  styleUrls: ['./all-free-checkups.component.css']
})
export class AllFreeCheckupsComponent implements OnInit {

  freeCheckup: FreeCheckup[] = [];
  filteredCheckups: any;
  subscription: Subscription;
  id:any;
  displayedColumns: string[] = ['id', 'name', 'email', 'phone','date'];
  dataSource:MatTableDataSource<FreeCheckup> = new MatTableDataSource<FreeCheckup>();

  @ViewChild(MatPaginator) matPaginator!: MatPaginator;
  @ViewChild(MatSort) matSort! : MatSort;

  constructor(private freecheckupService: FreecheckupService) {

    this.subscription = this.freecheckupService
    .getFreeCheckup()
    .subscribe((freeCheckup) => (this.filteredCheckups = this.freeCheckup = freeCheckup));
  }

  filter(query:string){
    console.log(query);
    this.filteredCheckups = query
      ? this.freeCheckup.filter((p) =>
          p.id.toString().toLowerCase().includes(query.toLowerCase())
        )
      : this.freeCheckup;
      console.log(this.filteredCheckups);
      this.dataSource = this.filteredCheckups;
  }



  ngOnInit(): void {
     // Getting FreeCheckups data.
     this.freecheckupService.getFreeCheckup()
     .subscribe(
       (successResponse)=>{
        console.log(successResponse);
        this.freeCheckup = successResponse;
        this.dataSource = new MatTableDataSource<FreeCheckup>(this.filteredCheckups);

        if(this.matPaginator){
          this.dataSource.paginator = this.matPaginator;
        }
        if (this.matSort) {
          this.dataSource.sort = this.matSort;
        }

       },
       (errorResponse)=>{
         console.log(errorResponse);
       }
     );




 
  }

}
