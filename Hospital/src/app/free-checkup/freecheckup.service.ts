import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { identity } from 'cypress/types/lodash';
import { Observable } from 'rxjs';
import { AddFreeCheckupRequest } from '../models/api-models/add-freecheckup.model';
import { FreeCheckup } from '../models/api-models/all-freeCheckups';

@Injectable({
  providedIn: 'root'
})
export class FreecheckupService {

  private baseApiUrl = 'https://localhost:44388';
  constructor(private httpClient: HttpClient) { }

  getFreeCheckup(): Observable<FreeCheckup[]>{
    return this.httpClient.get<FreeCheckup[]>(this.baseApiUrl + '/FreeCheckup');
  }

  addFreeCheckup(FreeCheckupRequest: FreeCheckup): Observable<FreeCheckup>{
    const addFreeCheckupRequest: AddFreeCheckupRequest ={
      id: FreeCheckupRequest.id,
      name: FreeCheckupRequest.name,
      email: FreeCheckupRequest.email,
      phone: FreeCheckupRequest.phone,
      date: FreeCheckupRequest.date
    };
    return this.httpClient.post<FreeCheckup>(this.baseApiUrl + '/FreeCheckup/add', addFreeCheckupRequest)
  }

}
