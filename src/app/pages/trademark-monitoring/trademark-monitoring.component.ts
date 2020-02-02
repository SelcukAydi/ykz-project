import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormArray } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';


@Component({
  selector: 'app-trademark-monitoring',
  templateUrl: './trademark-monitoring.component.html',
  styleUrls: ['./trademark-monitoring.component.css',
              '../../../assets/plugins/select2/css/select2.css'
]
})
export class TrademarkMonitoringComponent implements OnInit {

  trademarkForm : FormGroup;
  
  selectedItems = [];
  dropdownListItems = [];
  dropdownSettings : IDropdownSettings = {};

  constructor() { }

  ngOnInit() {
    
    this.trademarkForm = new FormGroup({
      trademarkName : new FormControl(''),
      classes : new FormArray([])
    });

    this.dropdownListItems = [
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

  get trademarkName() : AbstractControl {
    return this.trademarkForm.get('trademarkName');
  }

}
