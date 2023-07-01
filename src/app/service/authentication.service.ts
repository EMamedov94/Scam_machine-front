import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  get logIn(): boolean {
    return localStorage.getItem('token') != null;
  }
}
