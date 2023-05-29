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

  modalContent: string | undefined;

  ngOnInit(): void {
    this.result = this.data;
  }

  downloadAsTextFile() {
    this.modalContent = document.getElementById('companyInfo')?.innerText;
    const filename = `${this.result.naziv}.txt`;
    if (this.modalContent !== undefined) {
      const blob = new Blob([this.modalContent], { type: "text/plain" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      link.click();
      window.URL.revokeObjectURL(url);
    }
  }

  close(){
    this.Ref.close();
  }
}
