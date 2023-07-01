import {Component} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BasicService} from "../../service/basic.service";
import {PlayerService} from "../../service/player.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  defaultSlots: string = '?';
  resultSlots: any[] = [{}, {}, {}];
  isSpinning: boolean = false;
  start: boolean = false;
  errMessage: string = '';

  constructor(private http: HttpClient,
              private service: BasicService,
              private playerService: PlayerService) {
  }

  spin() {
    let headers = new HttpHeaders();
    const token = localStorage.getItem('token');
    if (token) {
      headers = headers.append('Authorization', 'Bearer ' + token);
    }

    this.http.post<any>(
      this.service.url + '/spin',
      {},
      {headers})
      .subscribe({
        next: res => {
          this.isSpinning = true;
          this.start = true;
          this.errMessage = '';
          // Эмуляция задержки для анимации вращения
          setTimeout(() => {
            this.isSpinning = false;
            this.resultSlots = res;
            this.playerService.updateUserBalance();
          }, 2000);
        },
        error: err => this.errMessage = err.error
      })
  }
}
