import {Component} from '@angular/core';
import {PlayerService} from "../../service/player.service";
import {AuthenticationService} from "../../service/authentication.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public authService: AuthenticationService,
              public playerService: PlayerService) {
  }

  isVisibleAuthBlock: boolean = false;
  userBalance: any;

  ngOnInit(): void {
    if (this.authService.logIn) {
      this.playerService.updateUserBalance()
    }
  }

  openAuthMenu() {
    this.isVisibleAuthBlock = !this.isVisibleAuthBlock;
  }

  logOut() {
    localStorage.clear();
  }
}
