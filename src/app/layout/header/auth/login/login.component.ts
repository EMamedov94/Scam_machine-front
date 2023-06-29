import { Component } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
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
    this.http.post<any>(this.service.url + '/login', {username, password}, {observe: 'response'}).subscribe(
      value => {
        if (value.status === 200) {
          localStorage.setItem('token', value.body.token);
          this.playerService.updateUserBalance()
          this.onClose();
        }
      },
      error => {
        if (error.status === 401) {
          this.errMessage = error.error;
        }
      }
    )
  }

  onClose() {
    this.headComp.isVisibleAuthBlock = false;
  }
}
