import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Nabavka } from '../model/Nabavka';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NabavkaService {

  constructor(private http : HttpClient) { }

  private readonly path:string = "http://localhost:8081/api/";

  getAll():Observable<Nabavka[]>{
    return this.http.get<Nabavka[]>(this.path + 'getAllProcurements');
  }

}
