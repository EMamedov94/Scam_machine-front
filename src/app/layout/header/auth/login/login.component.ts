import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BasicService} from "../../../../service/basic.service";
import {HeaderComponent} from "../../header.component";
import {PlayerService} from "../../../../service/player.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private http: HttpClient,
              public service: BasicService,
              private headComp: HeaderComponent,
              private playerService: PlayerService) {
  }

  username: any = '';
  password: any = '';
  errMessage: any = '';

  onLogin(username: any, password: any) {
    this.http.post<any>(this.service.url + '/login', {username, password}, {observe: 'response'})
      .subscribe({
        next: (res: any) => {
          localStorage.setItem('token', res.body.token);
          this.playerService.updateUserBalance()
          this.onClose();
        },
        error: err => {
          this.errMessage = err.error;
        }
      })
  }

  onClose() {
    this.headComp.isVisibleAuthBlock = false;
  }
}
