import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  isJsonString = <T>(str: string) => {
    try {
      return JSON.parse(str) as T;
    } catch (error) {
      return undefined as T;
    }
  }
}
