import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { MenuComponent } from './shared/menu/menu.component';
import {RouterConfig} from './router.config';
import {RouterModule} from '@angular/router';
import { NotificationsComponent } from './shared/notifications/notifications.component';
import {NotificationService} from './shared/notification.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RouterConfig)
  ],
  providers: [
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
