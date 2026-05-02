import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getFormations(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getFormationById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}