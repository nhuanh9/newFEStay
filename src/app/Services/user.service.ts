import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {User} from '../model/user';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment.prod';

const API_URL = `https://demo-project-spa.herokuapp.com`;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(API_URL + '/register', user);
  }

  registerSuccess(token: string): Observable<any> {
    return this.http.get<any>(API_URL + '/confirm-account?token=' + token);
  }

  login(user: User): Observable<User> {
    return this.http.post<User>(API_URL + '/login', user);
  }

  // passwordForgot(forgotPassword: ForgotPassword): Observable<ForgotPassword> {
  //   return this.http.post<ForgotPassword>(API_URL + '/forgot-password', forgotPassword);
  // }

  newPassword(user: User, id: number, token: string): Observable<User> {
    return this.http.post<User>(API_URL + `/new-password/${id}?token=` + token, user);
  }

  userDetail(id: string): Observable<User> {
    return this.http.get<User>(API_URL + `/users/${id}`);
  }
}
