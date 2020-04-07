import { Component, OnInit } from '@angular/core';
import {NotificationService} from "../notification.service";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  mensaje: string = 'Bienvenido al programa';
  tipo: string = 'info';
  constructor(private notificationService: NotificationService) {
    this.borrarMensaje();
    this.notificationService.emiter.subscribe(
      (d:any)=>{
        this.mensaje = d.mensaje;
        this.tipo = d.tipo;
        this.borrarMensaje();
      });
  }

  borrarMensaje(){
    setTimeout(() => {
      this.mensaje = null;
      this.tipo = null;
      }, 2000);
  }

  ngOnInit() {
  }

}
