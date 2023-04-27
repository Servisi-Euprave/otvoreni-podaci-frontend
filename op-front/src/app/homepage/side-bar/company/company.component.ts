import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { PopupComponent } from '../../../popup/popup.component';
import { Company } from 'src/app/model/Company';
import { Delatnost } from 'src/app/model/Delatnost';
import { CompanyService } from 'src/app/service/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements AfterViewInit  {

  companies: Company[] = [];

  constructor(private matdialog: MatDialog, private service: CompanyService) { }

  ngOnInit(): void {
    this.getAllCompanies();
  }

  displayedColumns: string[] = ['naziv', 'adresaSedista', 'delatnost', 'vlasnik'];
  dataSource = new MatTableDataSource<Company>(this.companies);

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
        pib: row.pib,
        naziv: row.naziv,
        
      }});
  }

  getAllCompanies(){
    this.service.getAll().subscribe({
      next: (c) => {this.companies = c; 
        this.dataSource = new MatTableDataSource<Company>(this.companies);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    })
  }
}