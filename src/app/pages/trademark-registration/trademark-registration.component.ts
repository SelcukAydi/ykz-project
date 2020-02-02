import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-trademark-registration',
  templateUrl: './trademark-registration.component.html',
  styleUrls: ['./trademark-registration.component.css']
})
export class TrademarkRegistrationComponent implements OnInit {

  trademarkForm : FormGroup

  selectedClassItems = [];

  classList = [];

  selectedGoods = [];

  goodList = [];

  dropdownSettings : IDropdownSettings = {};

  constructor() { }

  ngOnInit() {

    this.classList = [
      { item_id: 1, item_text: 'Class 1' },
      { item_id: 2, item_text: 'Class 2' },
      { item_id: 3, item_text: 'Class 3' },
      { item_id: 4, item_text: 'Class 4' },
      { item_id: 5, item_text: 'Class 5' },
      { item_id: 6, item_text: 'Class 6' },
      { item_id: 7, item_text: 'Class 7' },
      { item_id: 8, item_text: 'Class 8' },
      { item_id: 9, item_text: 'Class 9' },
      { item_id: 10, item_text: 'Class 10' },
      { item_id: 11, item_text: 'Class 11' },
      { item_id: 12, item_text: 'Class 12' },
      { item_id: 13, item_text: 'Class 13' },
      { item_id: 14, item_text: 'Class 14' },
      { item_id: 15, item_text: 'Class 15' }
    ];

    this.goodList = [
      { item_id: 1, item_text: 'Good 1' },
      { item_id: 2, item_text: 'Good 2' },
      { item_id: 3, item_text: 'Good 3' },
      { item_id: 4, item_text: 'Good 4' },
      { item_id: 5, item_text: 'Good 5' },
      { item_id: 6, item_text: 'Good 6' },
      { item_id: 7, item_text: 'Good 7' },
      { item_id: 8, item_text: 'Good 8' },
      { item_id: 9, item_text: 'Good 9' },
      { item_id: 10, item_text: 'Good 10' },
      { item_id: 11, item_text: 'Good 11' },
      { item_id: 12, item_text: 'Good 12' },
      { item_id: 13, item_text: 'Good 13' },
      { item_id: 14, item_text: 'Good 14' },
      { item_id: 15, item_text: 'Good 15' }
    ];

    this.dropdownSettings = {
      singleSelection : false,
      idField : 'item_id',
      textField : 'item_text',
      selectAllText : 'Select All',
      unSelectAllText : 'UnSelect All',
      itemsShowLimit : 3,
      allowSearchFilter : true
    }

  }

}
