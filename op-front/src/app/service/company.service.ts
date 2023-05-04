import { Injectable } from '@angular/core';
import { Company } from '../model/Company';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Delatnost } from '../model/Delatnost';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private readonly path:string = "http://localhost:7887/api/";

  constructor(private http:HttpClient) { }

  getAll():Observable<Company[]>{
    return this.http.get<Company[]>(this.path + 'company/');
  }

  getCompanies(params: CompanyParams): Observable<Company[]> {
    let url = new URL(environment.aprApiURL);
    url.pathname = 'api/company/';

    url.searchParams.set('page', params.page.toString());
    if (params.order) {
      url.searchParams.set('order', params.order);
    }
    if (params.asc) {
      url.searchParams.set('asc', params.asc.toString());
    }
    if (params.delatnost) {
      url.searchParams.set('delatnost', params.delatnost);
    }
    if (params.mesto) {
      url.searchParams.set('mesto', params.mesto);
    }
    if (params.sediste) {
      url.searchParams.set('sediste', params.sediste);
    }
    return this.http.get<Company[]>(url.toString());
  }
  
}

export interface CompanyParams {
  page: number;
  order: CompanyOrderCol | null;
  asc: boolean | null;
  delatnost: Delatnost | null;
  sediste: string | null;
  mesto: string | null;
}

export enum CompanyOrderCol {
  naziv = 'naziv',
  vlasnik = 'vlasnik',
  pib = 'PIB',
  mesto = 'mesto',
}

export const environment = {
  production: true,
  aprApiURL: 'http://localhost:7887',
};