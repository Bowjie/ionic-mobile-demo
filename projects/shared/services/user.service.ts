import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseResponse } from '../models/base-response';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  public getDummyUser(): Observable<BaseResponse<User[]>> {
    const url = '/src/assets/fake-data/dummyUser/dusty.json';
    return this.httpClient.get<BaseResponse<User[]>>(url);
  }
}
