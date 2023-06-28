import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BasicService} from "./basic.service";
import {HeaderComponent} from "../layout/header/header.component";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient,
              private service: BasicService) { }

  getCurrentUser(): Observable<any> {
      const headers = new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('token')
      });
      return this.http.get(this.service.url + '/getCurrentUser', {headers})
  }
}
