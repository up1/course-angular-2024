import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSubject = new BehaviorSubject<string[]>([]);
  messages$ = this.messageSubject.asObservable();

  addNewMessage(newMessage: string) {
    console.log('newMessage', newMessage);
    this.messageSubject.next([...this.messageSubject.value, newMessage]);
  }
}