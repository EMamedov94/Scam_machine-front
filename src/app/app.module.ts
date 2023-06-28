import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthComponent } from './layout/header/auth/auth.component';
import { LoginComponent } from './layout/header/auth/login/login.component';
import { RegistrationComponent } from './layout/header/auth/registration/registration.component';
import { HeaderComponent } from './layout/header/header.component';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { GameComponent } from './layout/game/game.component';
import { ProfileComponent } from './layout/header/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    RegistrationComponent,
    HeaderComponent,
    GameComponent,
    ProfileComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        HttpClientModule
    ],
  providers: [
    HeaderComponent,
    LoginComponent,
    ProfileComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
