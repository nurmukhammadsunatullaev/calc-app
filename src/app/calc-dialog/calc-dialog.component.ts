import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {Type} from "../models/type";
import {TypeService} from '../services/type.service';

@Component({
  selector: 'app-calc-dialog',
  templateUrl: './calc-dialog.component.html',
  styleUrls: ['./calc-dialog.component.css']
})
export class CalcDialogComponent implements OnInit {

  types: Type[];
  selectedType: Type
  result : any

  constructor(@Inject(MAT_DIALOG_DATA) public data: number, private typeService: TypeService) { }

  public ngOnInit() : void{
    this.typeService.getTypes().subscribe(data=> this.types=data.data);
  }

  public calculate(priceBox) :void  {
      let price=Number(priceBox.value)*this.selectedType.percent / 100;
      this.result=price>this.selectedType.constantEntity.constantValue ? price : this.selectedType.constantEntity.constantValue;
  }
}
