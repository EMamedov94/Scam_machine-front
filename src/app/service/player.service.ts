import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BasicService} from "./basic.service";
import {HeaderComponent} from "../layout/header/header.component";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private userBalance: any;

  constructor(private http: HttpClient,
              private service: BasicService) {
  }


  getUserBalance(): any {
    return this.userBalance;
  }

  setUserBalance(value: any) {
    this.userBalance = value;
  }

  getCurrentUser(): Observable<any> {
      const headers = new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('token')
      });
      return this.http.get(this.service.url + '/getCurrentUser', {headers})
  }

  updateUserBalance(): void {
    this.getCurrentUser().subscribe((value) => {
      this.setUserBalance(value.balance);
    });
  }
}
