import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrademarkSearchComponent } from './trademark-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


@NgModule({
  declarations: [TrademarkSearchComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ]
})
export class TrademarkSearchModule { }
