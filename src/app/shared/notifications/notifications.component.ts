import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  mensaje: string = 'barra de notificaciones';
  tipo: string = 'info';
  constructor() { }

  ngOnInit() {
  }

}
