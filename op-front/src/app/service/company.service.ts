import { Injectable } from '@angular/core';
import { Company } from '../model/Company';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private readonly path:string = "http://localhost:7887/api/";

  constructor(private http:HttpClient) { }

  getAll():Observable<Company[]>{
    return this.http.get<Company[]>(this.path + 'company/');
  }

  
}
