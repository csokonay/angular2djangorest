import { Component } from '@angular/core';

import { Hero } from './mycomponents/hero';
import { HeroService } from './mycomponents/hero.service';

@Component({
  selector: 'my-app',
  template: `
     <h1>{{title}}</h1>
     <nav>
        <a routerLink="/dashboard">Dashboard</a>
        <a routerLink="/heroes">Heroes</a>
     </nav>
     <router-outlet></router-outlet>
   `
})
export class AppComponent {
  heroes: Hero[];
  title = 'Tour of Heroes';
}
