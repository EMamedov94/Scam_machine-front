import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasicService {

  constructor() { }

  url: string = 'https://localhost:8080';


}
