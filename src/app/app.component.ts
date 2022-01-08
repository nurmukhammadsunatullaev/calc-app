import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalcDialogComponent } from './calc-dialog/calc-dialog.component';
import {TypeService} from './services/type.service';
import {Type} from "./models/type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'calc-app';
  types = [];
  constructor(public dialog: MatDialog) {}

  openDialog(): void {

    const dialogRef = this.dialog.open(CalcDialogComponent, {
      width: '500px',
      data : 1
    });



    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }
}
