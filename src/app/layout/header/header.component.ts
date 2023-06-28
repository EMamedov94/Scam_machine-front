import { Component } from '@angular/core';
import {BasicService} from "../../service/basic.service";
import {PlayerService} from "../../service/player.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private service: BasicService,
              private http: HttpClient,
              private playerService: PlayerService) {
  }

  isVisibleAuthBlock: boolean = false;
  user: any = this.playerService.getCurrentUser().subscribe(value => this.user = value);

  openAuthMenu() {
    this.isVisibleAuthBlock = !this.isVisibleAuthBlock;
  }

  logOut() {
    localStorage.clear();
  }

  get logIn(): boolean {
    return localStorage.getItem('token') != null;
  }
}
