import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Room} from '../model/room';
import {Order} from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  API_URL = environment.apiUrl + '/order';

  constructor(private http: HttpClient) {
  }

  getList(): Observable<Order[]> {
    return this.http.get<Order[]>(this.API_URL);
  }

  delete(id: string): Observable<Order> {
    return this.http.delete<Order>(this.API_URL + `/${id}`);
  }

  getOrdersByHouseName(houseName: string): Observable<Order[]> {
    return this.http.post<Order[]>(this.API_URL + `/search-by-house-name`, houseName);
  }

  getOrdersByGuestName(guestName: string): Observable<Order[]> {
    return this.http.post<Order[]>(this.API_URL + `/search-by-guest-name`, guestName);
  }

  getOrdersByUserId(userId: number): Observable<Order[]> {
    return this.http.post<Order[]>(this.API_URL + `/search-by-user-id`, userId);
  }

}
