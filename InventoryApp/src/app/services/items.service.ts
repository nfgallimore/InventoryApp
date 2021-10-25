import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Item } from '../models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private httpClient: HttpClient) { }

  public getItems(): Observable<Array<Item>> {

    // use http client to make a GET request to API
    return this.httpClient.get(`${environment.apiUrl}/v1/Items`)

    // this pipe + map essentially chains a function onto the end of the GET request, so that when
    // the GET request finishes, the inner part of this pipe will execute.

    .pipe(map(resp => {

        try {

          // convert the json response into an array of Orders
          return Item.fromJsonArray(resp);

        } catch (err) {

          // if error occurs throw an exception
          throw new Error(err);
        }
    }));
  }

  public deleteItem(id: number): Observable<Object> {
    return this.httpClient.delete(`${environment.apiUrl}/v1/Items?itemid=${id}`);
  }

  public updateItem(item: Item): Observable<Object> {
    return this.httpClient.put(`${environment.apiUrl}/v1/Items`, item);
  }

  public createItem(item: Item): Observable<Object> {
    return this.httpClient.post(`${environment.apiUrl}/v1/Items`, item);
  }

}
