import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {PlayerService} from "./player.service";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private playerService: PlayerService) { }

  userSubject = new BehaviorSubject<any>(null);

  setUser(user: any) {
    this.userSubject.next(user);
  }

  getUser(): Observable<any> {
    return this.userSubject.asObservable();
  }
}
