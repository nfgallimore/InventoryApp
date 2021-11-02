import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Supplier } from '../models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {

  constructor(private httpClient: HttpClient) { }

  public getSuppliers(): Observable<Array<Supplier>> {

    return this.httpClient.get(`${environment.apiUrl}/v1/Suppliers`)

    .pipe(map(resp => {

        try {
          return Supplier.fromJsonArray(resp);

        } catch (err) {

          throw new Error(err);
        }
    }));
  }

  public deleteSupplier(id: number): Observable<Object> {
    return this.httpClient.delete(`${environment.apiUrl}/v1/Suppliers?id=${id}`);
  }

  public updateSupplier(supplier: Supplier): Observable<Object> {
    return this.httpClient.put(`${environment.apiUrl}/v1/Suppliers`, supplier);
  }

  public createSupplier(supplier: Supplier): Observable<Object> {
    return this.httpClient.post(`${environment.apiUrl}/v1/Suppliers`, supplier);
  }

}
