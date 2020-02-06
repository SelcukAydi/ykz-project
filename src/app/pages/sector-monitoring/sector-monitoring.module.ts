import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectorMonitoringComponent } from './sector-monitoring.component';




@NgModule({
  declarations: [SectorMonitoringComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ]
})
export class SectorMonitoringModule { }
