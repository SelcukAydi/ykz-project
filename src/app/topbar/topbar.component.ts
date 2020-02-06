import { NotificationService } from './../../@sia/services/notification.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(private notificationService : NotificationService) { }

  ngOnInit() {
    this.notificationService.channel.bind('my-event', data => {
      console.log('new event fired up');
    });
  }

}
