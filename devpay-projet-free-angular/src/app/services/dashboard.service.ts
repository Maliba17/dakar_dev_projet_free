import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private API = 'http://localhost:3000/api'; // adapte à ton backend

  constructor(private http: HttpClient) {}

  getProfile(): Observable<any> {
    return this.http.get(`${this.API}/me`);
  }
}