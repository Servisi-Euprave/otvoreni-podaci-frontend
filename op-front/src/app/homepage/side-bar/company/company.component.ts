import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { PopupComponent } from '../../../popup/popup.component';
import { Company } from 'src/app/model/Company';
import { Delatnost } from 'src/app/model/Delatnost';
import { CompanyOrderCol, CompanyParams, CompanyService } from 'src/app/service/company.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements AfterViewInit  {

  // companies: Company[] = [];

  private _companies: Company[] = [];
  public get companies(): Company[] {
    return this._companies;
  }
  private _page: number = 0;
  public get page(): number {
    return this._page;
  }

  constructor(private matdialog: MatDialog, private service: CompanyService) { }

  ngOnInit(): void {
    // this.getAllCompanies();
    this._loading = true;
    this.refreshPage();
  }

  displayedColumns: string[] = ['naziv', 'adresaSedista', 'delatnost', 'vlasnik'];
  dataSource = new MatTableDataSource<Company>(this._companies);

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

  // getAllCompanies(){
  //   this.service.getAll().subscribe({
  //     next: (c) => {this.companies = c; 
  //       this.dataSource = new MatTableDataSource<Company>(this.companies);
  //       this.dataSource.paginator = this.paginator;
  //       this.dataSource.sort = this.sort;
  //     }
  //   })
  // }

  filterOrderForm = new FormGroup({
    asc: new FormControl(null),
    order: new FormControl(null),
    sediste: new FormControl(''),
    delatnost: new FormControl(null),
    mesto: new FormControl(''),
  });

  private _colKeys: CompanyOrderCol[] = Object.values(CompanyOrderCol);
  public get colKeys(): CompanyOrderCol[] {
    return this._colKeys;
  }

  private _delatnostiKeys: Delatnost[] = Object.values(Delatnost);
  public get delatnostiKeys(): Delatnost[] {
    return this._delatnostiKeys;
  }

  onSubmit() {
    this._page = 0;
    this.refreshPage();
  }

  resetFilters() {
    this.filterOrderForm.reset();
  }

  private _loading = false;
  public get loading() {
    return this._loading;
  }

  refreshPage() {
    this._loading = true;
    let params: CompanyParams = {
      page: this._page,
      order: this.filterOrderForm.controls['order'].value,
      asc: this.filterOrderForm.controls['asc'].value,
      delatnost: this.filterOrderForm.controls['delatnost'].value,
      sediste: this.filterOrderForm.controls['sediste'].value,
      mesto: this.filterOrderForm.controls['mesto'].value,
    };

    this.service.getCompanies(params).subscribe((c) => {
      this._companies = c;
      this.dataSource = new MatTableDataSource<Company>(this._companies);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this._loading = false;
    });
  }

  pageBack() {
    if (this._page > 0) {
      this._page--;
    }
    this.refreshPage();
  }

  pageNext() {
    console.log('here');
    this._page++;
    this.refreshPage();
  }

  pageFirst() {
    this._page = 0;
    this.refreshPage();
  }
}