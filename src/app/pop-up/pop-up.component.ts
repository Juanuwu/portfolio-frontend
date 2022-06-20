import { Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {
  private dialogRef: any;
  animal: string;
  name: string;
  data: any;


  constructor(public dialog: MatDialog) {}


  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
