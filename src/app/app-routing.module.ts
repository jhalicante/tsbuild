import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {SigninComponent} from "./signin/signin.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const appRoutes: Routes = [
  { path: '', component: SigninComponent }, // Index page
  { path: 'home', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }, // Page not found
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
