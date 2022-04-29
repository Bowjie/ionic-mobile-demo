import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  public userSubject = new BehaviorSubject<User>(null);
  constructor() {}

  public saveUserSession(user: User) {
    this.userSubject.next(user);
  }
}
