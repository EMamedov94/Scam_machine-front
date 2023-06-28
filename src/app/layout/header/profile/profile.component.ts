import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BasicService} from "../../../service/basic.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private http: HttpClient,
              private service: BasicService) {
  }

}
