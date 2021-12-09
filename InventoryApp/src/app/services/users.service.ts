import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  public getUsers(): Observable<Array<User>> {

    // use http client to make a GET request to API
    return this.httpClient.get(`${environment.apiUrl}/v1/Users`)

    // this pipe + map essentially chains a function onto the end of the GET request, so that when
    // the GET request finishes, the inner part of this pipe will execute.

    .pipe(map(resp => {

        try {

          // convert the json response into an array of Orders
          return User.fromJsonArray(resp);

        } catch (err) {

          // if error occurs throw an exception
          throw new Error(err);
        }
    }));
  }

  public deleteUser(id: number): Observable<Object> {
    return this.httpClient.delete(`${environment.apiUrl}/v1/User?userid=${id}`);
  }

  public updateUser(user: User): Observable<Object> {
    return this.httpClient.put(`${environment.apiUrl}/v1/Users`, user);
  }

  public createUser(user: User): Observable<Object> {
    return this.httpClient.post(`${environment.apiUrl}/v1/Users`, user);
  }
}
