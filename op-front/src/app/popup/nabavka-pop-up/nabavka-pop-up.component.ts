import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-nabavka-pop-up',
  templateUrl: './nabavka-pop-up.component.html',
  styleUrls: ['./nabavka-pop-up.component.css']
})
export class NabavkaPopUpComponent implements OnInit {

  result: any;

  modalContent: string | undefined;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private Ref: MatDialogRef<NabavkaPopUpComponent>) { }

  ngOnInit(): void {
    this.result = this.data;
  }
  
  downloadAsTextFile() {
    this.modalContent = document.getElementById('nabavkaInfo')?.innerText;
    const filename = `${this.result.id}.txt`;
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
