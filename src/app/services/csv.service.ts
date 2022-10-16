import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CsvService {

  constructor(private http: HttpClient) { }
  getInfo() {

    return this.http.get('assets/list.csv', { responseType: 'text' });

  }
}
