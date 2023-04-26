import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private Ref: MatDialogRef<PopupComponent>) { }

  result: any;

  ngOnInit(): void {
    this.result = this.data;
  }

  close(){
    this.Ref.close();
  }
}