import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrademarkRegistrationComponent } from './trademark-registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';



@NgModule({
  declarations: [TrademarkRegistrationComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ]
})
export class TrademarkRegistrationModule { }
