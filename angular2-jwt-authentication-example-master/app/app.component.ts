import { Component } from '@angular/core';

import { Hero } from './mycomponents/hero';
import { HeroService } from './mycomponents/hero.service';
import { AuthenticationService } from './_services/index';

@Component({
  selector: 'my-app',
  template: `
     <h1>{{title}}</h1>
     <nav>
        <a routerLink="/dashboard" routerLinkActive="active" *ngIf="authService.isLoggedIn()">Dashboard</a>
        <a routerLink="/heroes" routerLinkActive="active" *ngIf="authService.isLoggedIn()">Heroes</a>
        <a [routerLink]="['/home']" *ngIf="authService.isCustomerLoggedIn()">User list</a>
        <a [routerLink]="['/login']" *ngIf="authService.isLoggedIn()">Logout</a>
     </nav>
     <router-outlet></router-outlet>
   `,
   styleUrls: ['app/app.component.css']
})
export class AppComponent {
  heroes: Hero[];
  title = 'Tour of Heroes';
  
  constructor(private authService: AuthenticationService) { }

}
