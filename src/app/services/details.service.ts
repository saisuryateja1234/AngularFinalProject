import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private http: HttpClient) { }

  getDiet(): Observable<any> {
    return this.http.get("http://localhost:4500/products");
  }

  getDetails(id: number): Observable<any> {
    return this.http.get("http://localhost:4500/products/" + id);
  }

}
