import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { HeroService } from './mycomponents/hero.service';
import { AuthGuard } from './_guards/index';
import { AuthenticationService, UserService } from './_services/index';
import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';
import { HeroesComponent } from './mycomponents/heroes.component';
import { HeroDetailComponent, EnterMeetingComponent } from './mycomponents/index';
import { DashboardComponent } from './mycomponents/index';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        DashboardComponent,
        //HeroComponent,
        HeroesComponent,
        HeroDetailComponent,
        EnterMeetingComponent
    ],
    providers: [
        AuthGuard,
        AuthenticationService,
        UserService,
        HeroService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }