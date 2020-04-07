import { Component, OnInit } from '@angular/core';
import {NotificationService} from "../shared/notification.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
  }

  mostrarInfo(){
    this.notificationService.show('info','mensaje de información');
  }

  mostrarError(){
    this.notificationService.show('error','mensaje de error');
  }

}
