import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HeaderComponent} from "./layout/header/header.component";
import {GameComponent} from "./layout/game/game.component";

const routes: Routes = [
  {path: '', component: GameComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
