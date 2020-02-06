import { Injectable } from '@angular/core';

declare const Pusher : any;


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private API_KEY : string = 'fcba7430029cdeb42ac1';
  
  private API_CLUSTER : string = 'eu';

  pusher : any;

  channel : any;

  constructor() { 
    this.pusher = new Pusher('fcba7430029cdeb42ac1', {
      cluster: 'eu',
      forceTLS: true
    });
    this.channel = this.pusher.subscribe('my-channel');
  }
}
