import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';
import { Course } from '../models/course.model';
import { Note } from '../models/note.model';
import { Certificate } from '../models/certificate.model';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  // AUTH
  login(data: { email: string; password: string }) {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, data);
  }

  register(data: { name: string; email: string; password: string }) {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }

  // API DASHBOARD
  getMe(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/me`);
  }

  getMyCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}/my-courses`);
  }

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(`${this.apiUrl}/notes`);
  }

  getCertificates(): Observable<Certificate[]> {
    return this.http.get<Certificate[]>(`${this.apiUrl}/certificates`);
  }
}