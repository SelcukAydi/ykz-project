import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-trademark-opposition',
  templateUrl: './trademark-opposition.component.html',
  styleUrls: ['./trademark-opposition.component.css']
})
export class TrademarkOppositionComponent implements OnInit {

  trademarkForm : FormGroup

  constructor() { }

  ngOnInit() {
  }

}
