import { Injectable } from '@angular/core';
import { Farm } from './farm';
import * as data from './mock-data.json';

@Injectable()
export class SelectedFarmService {
  getFarmById(id: number): Promise<Farm> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(data[id]);
      }, 100);
    });
  }
}
