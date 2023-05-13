import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  Options: any;
  sugg: any;

  constructor(private http: HttpClient) { }

  getForum(): Observable<any> {
    return this.http.get("http://localhost:4500/forum");
  }

  getForumById(id: number): Observable<any>{
    return this.http.get("http://localhost:4500/forum/"+id);
  }

  public postquery(obj: any): Observable<any>{
    this.Options = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post("http://localhost:4500/forum", obj, this.Options);
  }

  public postSuggestion(obj: any): Observable<any>{
    const sugg = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put("http://localhost:4500/forum/" + obj.id, obj, { headers: sugg });
  }
}
