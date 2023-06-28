import { Component } from '@angular/core';
import {BasicService} from "../../../../service/basic.service";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {HeaderComponent} from "../../header.component";
import {catchError, throwError} from "rxjs";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor(private http: HttpClient,
              public service: BasicService,
              private headComp: HeaderComponent) {
  }

  username: any = '';
  password: any = '';

  onRegistration(username: any, password: any) {
    this.http.post<any>(this.service.url + '/registration', {username, password})
      .subscribe((response) => {
        if (response.status == 200) {
          this.onClose();
        }
    })
  }

  onClose() {
    this.headComp.isVisibleAuthBlock = false;
  }
}
