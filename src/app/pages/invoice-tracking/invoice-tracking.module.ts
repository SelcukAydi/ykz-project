import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceTrackingComponent } from './invoice-tracking.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [InvoiceTrackingComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class InvoiceTrackingModule { }
