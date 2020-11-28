import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';
import { HttpClientModule } from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { AboutComponent } from './about/about.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { SentenceService } from "./service/sentence.service";

const appRoutes:Routes = [
  {path: "home", component: CarsComponent},
  {path: "about", component: AboutComponent},
  {path: "user", children: [
    {path: "list", component: UserListComponent, children: [
      {path: "detail/:name", component: UserDetailComponent}
    ]}
  ]},
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "**", redirectTo: "/home", pathMatch: "full"}
]

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    AboutComponent,
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SentenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
