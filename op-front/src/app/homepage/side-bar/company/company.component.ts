import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { PopupComponent } from '../../../popup/popup.component';
import { Company } from 'src/app/model/Company';
import { Delatnost } from 'src/app/model/Delatnost';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements AfterViewInit  {

  constructor(private matdialog: MatDialog) { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['naziv', 'adresaSedista', 'delatnost', 'likvidirana'];
  dataSource = new MatTableDataSource<Company>(company_list);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  FilterChange(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue;
  }

  OpenPopup(row: any){
    console.log(row)
    this.matdialog.open(PopupComponent, {width: '60%', height: '30%',
      data:{
        PIB: row.PIB,
        naziv: row.naziv,
        
      }});
  }
}

const company_list: Company[] = [
  {vlasnik: 123, PIB: 105108377, naziv: 'Hobotnica', adresaSedista: 'Limanska pijaca', mesto: 'Novi Sad', postanskiBroj: '2100', delatnost:  Delatnost.OPSTE_JAVNE_USLUGE, sediste: 'Novi Sad', password: 'lmao', likvidirana: false },
  {vlasnik: 456, PIB: 273013098, naziv: 'Mikromarket', adresaSedista: 'Seljackih buna 93', mesto: 'Novi Sad', postanskiBroj: '2100', delatnost:  Delatnost.OPSTE_JAVNE_USLUGE, sediste: 'Novi Sad', password: 'lmao', likvidirana: true },
  {vlasnik: 789, PIB: 649728071, naziv: 'Apoteka Jankovic', adresaSedista: 'Mileve Maric 23', mesto: 'Novi Sad', postanskiBroj: '2100', delatnost:  Delatnost.ZDRAVSTVO, sediste: 'Novi Sad', password: 'lmao', likvidirana: false },
  {vlasnik: 987, PIB: 129536494, naziv: 'Prva vojvodjanska brigada', adresaSedista: 'Seljackih buna 33', mesto: 'Novi Sad', postanskiBroj: '2100', delatnost:  Delatnost.EDUKACIJA, sediste: 'Novi Sad', password: 'lmao', likvidirana: false },
];