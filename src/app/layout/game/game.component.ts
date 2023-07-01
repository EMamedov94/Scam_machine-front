import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BasicService} from "../../service/basic.service";
import {ProfileComponent} from "../header/profile/profile.component";
import {PlayerService} from "../../service/player.service";
import {HeaderComponent} from "../header/header.component";
import {DataService} from "../../service/data.service";
import {Observable, Subject, switchMap} from "rxjs";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  defaultSlots: any = '?';
  resultSlots: any[] = [{}, {}, {}];
  isSpinning: boolean = false;
  start: boolean = false;

  constructor(private http: HttpClient,
              private service: BasicService,
              private playerService: PlayerService) {
  }

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
        this.isSpinning = true;
        this.start = true;
        // Эмуляция задержки для анимации вращения
        setTimeout(() => {
          this.isSpinning = false;
          this.resultSlots = res;
          this.playerService.updateUserBalance();
        }, 2000);
      })
    });
  }
}
