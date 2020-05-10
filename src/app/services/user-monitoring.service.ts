import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserMonitoringService {

  constructor(private http: HttpClient) { }

  getCampBySlug(): Observable<any> {
    const url = `http://www.json-generator.com/api/json/get/cdZEFBtgCW?indent=2`;
    return this.http.get(url);
  }
}
