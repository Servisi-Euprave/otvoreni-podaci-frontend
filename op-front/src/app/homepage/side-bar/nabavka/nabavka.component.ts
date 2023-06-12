import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Nabavka } from 'src/app/model/Nabavka';
import { NabavkaPopUpComponent } from 'src/app/popup/nabavka-pop-up/nabavka-pop-up.component';
import { NabavkaService } from 'src/app/service/nabavka.service';

@Component({
  selector: 'app-nabavka',
  templateUrl: './nabavka.component.html',
  styleUrls: ['./nabavka.component.css']
})
export class NabavkaComponent implements AfterViewInit {

  private _nabavke: Nabavka[] = [];

  public get nabavke(): Nabavka[] {
    return this._nabavke;
  }

  constructor(private service : NabavkaService, private matdialog: MatDialog) { }

  displayedColumns: string[] = ['potrazivac', 'periodNabavke', 'imeNabavke', 'opis'];
  dataSource = new MatTableDataSource<Nabavka>(this._nabavke);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  ngOnInit(): void {
    this.load();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  FilterChange(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue;
  }

  load() {
    this.service.getAll().subscribe((n) => {
      this._nabavke = n;
      this.dataSource = new MatTableDataSource<any>(this._nabavke);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  downloadAsTextFile() {
    const headers = [
      'ID',
      'Potraživač',
      'ID nabavke',
      'Datum izdavanja nabavke',
      'Rok za zaključenje',
      'Ime nabavke',
      'Opis nabavke',
      'Pobednik ID'
    ];
  
    const columnWidths = [36, 10, 25, 25, 25, 25, 25, 36];
  
    const formatColumn = (value: string, width: number) => {
      const truncatedValue = value.substring(0, width);
      const paddedValue = truncatedValue.padEnd(width, ' ');
      return paddedValue;
    };
  
    const headerRow = headers.map((header, index) => formatColumn(header, columnWidths[index])).join(' | ');
  
    const content = [
      headerRow,
      '-'.repeat(headerRow.length),
      ...this.dataSource.data.map((nabavka: Nabavka) => {
        const startDate = nabavka.start_date;
        const endDate = nabavka.end_date || '';
  
        const row = [
          nabavka.id,
          nabavka.procuring_entity_pi_b,
          nabavka.procurement_plan_id,
          startDate,
          endDate,
          nabavka.procurement_name,
          nabavka.description,
          nabavka.winner_id
        ];
  
        return row
          .map((field, index) => formatColumn(field.toString(), columnWidths[index]))
          .join(' | ');
      })
    ].join('\n');
  
    const filename = 'table_content.txt';
    if (content !== '') {
      const blob = new Blob([content], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      link.click();
      window.URL.revokeObjectURL(url);
    }
  }

  
  OpenPopup(row: any){
    console.log(row)
    this.matdialog.open(NabavkaPopUpComponent, {width: '40%', height: '50%',
      data:{
        id: row.id,
        potrazivac: row.procuring_entity_pi_b,
        pocetak: row.start_date,
        kraj: row.end_date,
        ime: row.procurement_name,
        opis : row.description,
        pobednik: row.winner_id
      }});
  }

}
