import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrademarkMonitoringComponent } from './trademark-monitoring.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


@NgModule({
  declarations: [TrademarkMonitoringComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  exports : [
    TrademarkMonitoringComponent
  ]
})
export class TrademarkMonitoringModule { }
