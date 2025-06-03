// notification.service.ts
import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs' // ← RxJS import for reactive programming

@Injectable({
  providedIn: 'root' // ← Makes service available app-wide (singleton)
})
export class NotificationService {
  private readonly messageSubject = new BehaviorSubject<string>('') // ← Starts with empty string
  public message$ = this.messageSubject.asObservable() // ← $ convention for observables

  sendMessage (message: string) {
    this.messageSubject.next(message) // ← Updates all subscribers
  }

  clearMessage () {
    this.messageSubject.next('')
  }
}
