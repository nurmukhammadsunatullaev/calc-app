import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc-dialog',
  templateUrl: './calc-dialog.component.html',
  styleUrls: ['./calc-dialog.component.css']
})
export class CalcDialogComponent implements OnInit {
  types = ['1','2','3'];

  type: string;

  constructor() { }

  ngOnInit() {
  }

}
