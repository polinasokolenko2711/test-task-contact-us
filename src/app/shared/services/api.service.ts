import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ContactForm } from '../models/contact-form';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://test.secureprivacy.ai/api/';

  constructor(private http: HttpClient) { }

  postContactUs(value: ContactForm): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<Observable<ContactForm>>(this.apiUrl + 'email', value, { headers });
  }
}
