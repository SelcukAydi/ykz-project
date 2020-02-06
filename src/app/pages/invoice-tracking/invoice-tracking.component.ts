import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-tracking',
  templateUrl: './invoice-tracking.component.html',
  styleUrls: ['./invoice-tracking.component.css']
})
export class InvoiceTrackingComponent implements OnInit {

  constructor() { 
    console.log("created newly");
  }

  ngOnInit() {
  }

}
