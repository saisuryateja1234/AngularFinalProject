import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DietService {

  constructor(private http: HttpClient) { }

  getDetails(id: number): Observable<any> {
    return this.http.get("http://localhost:4500/details/" + id);
  }

  getDiet(): Observable<any> {
    return this.http.get("http://localhost:4500/details");
  }

}
