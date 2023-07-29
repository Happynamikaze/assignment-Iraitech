
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private sharedTextSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public sharedText$: Observable<string> = this.sharedTextSubject.asObservable();

  setSharedText(text: string): void {
    this.sharedTextSubject.next(text);
  }
}
