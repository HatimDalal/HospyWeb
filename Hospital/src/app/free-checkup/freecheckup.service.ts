import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}
