import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BasicService} from "../../service/basic.service";
import {ProfileComponent} from "../header/profile/profile.component";
import {PlayerService} from "../../service/player.service";
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  constructor(private http: HttpClient,
              private service: BasicService,
              private playerService: PlayerService) {
  }

  defaultSlots: any = [{value: 0}, {value: 0}, {value: 0}];

  spin() {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token')
    });
    this.http.post<any>(
      this.service.url + '/spin',
      {},
      {headers})
      .subscribe({
      next: ((res: any) => {
        this.defaultSlots = res;
        this.playerService.getCurrentUser().subscribe();
      })
    });
  }
}
