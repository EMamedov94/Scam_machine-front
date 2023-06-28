import { Component } from '@angular/core';
import {BasicService} from "../../../service/basic.service";
import {HeaderComponent} from "../header.component";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  constructor(private headComp: HeaderComponent) {
  }

  isVisibleLoginBlock: boolean = false;
  isVisibleRegistrationBlock: boolean = false;
  isVisible: boolean = true;

  openLogin() {
    this.isVisibleLoginBlock = true;
    this.isVisible = false;
  }

  openRegistration() {
    this.isVisibleRegistrationBlock = true;
    this.isVisible = false;
  }

  onClose() {
    this.headComp.isVisibleAuthBlock = false;
  }
}
