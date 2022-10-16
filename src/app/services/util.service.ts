import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private http: HttpClient) { }
  getInfo() {
    return this.http.get('assets/list.csv', { responseType: 'text' });
  }
  getJsonData(json: any) {
    return this.http.get(json, { responseType: 'text' });
  }
}
