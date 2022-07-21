import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Farm } from './farm';
import * as data from './mock-data.json';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  getResponse() {
    return this.http.get('https://56ff-189-215-150-92.ngrok.io');
  }

  getFarms(): Promise<Farm[]> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(
          data.default.map((farm) => ({
            ...farm,
            ActiveDate: new Date(farm.ActiveDate),
          }))
        );
      }, 100);
    });
  }
}
