import { Component } from '@angular/core';
import {BasicService} from "../../../../service/basic.service";
import {HttpClient} from "@angular/common/http";
import {HeaderComponent} from "../../header.component";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  username: any = '';
  password: any = '';
  message: any = '';
  isSuccess: boolean = false;

  constructor(private http: HttpClient,
              public service: BasicService,
              private headComp: HeaderComponent) {
  }

  onRegistration(username: any, password: any) {
    this.http.post<any>(this.service.url + '/registration', {username, password})
      .subscribe({
        next: () => {
          this.isSuccess = true;
          this.message = 'Success!';
          setTimeout(() => {
            this.onClose();
          }, 2000)
        },
        error: err => {
          this.isSuccess = false;
          this.message = err.error;
        }
      })
  }

  onClose() {
    this.headComp.isVisibleAuthBlock = false;
  }
}
