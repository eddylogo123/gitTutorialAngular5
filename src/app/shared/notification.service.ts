import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private subject = new Subject<any>();
  public emiter = this.subject.asObservable();
  constructor() { }

  show(tipo, mensaje){
    this.subject.next({tipo, mensaje});
  }
}
