import {ChangeDetectorRef, Component} from '@angular/core';
import {BasicService} from "../../service/basic.service";
import {PlayerService} from "../../service/player.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {DataService} from "../../service/data.service";
import {GameComponent} from "../game/game.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private service: BasicService,
              private http: HttpClient,
              public playerService: PlayerService) {
  }

  isVisibleAuthBlock: boolean = false;
  userBalance: any;

  ngOnInit(): void {
    if (this.logIn) {
      this.playerService.updateUserBalance()
    }
  }

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
