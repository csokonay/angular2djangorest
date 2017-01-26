import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';
import { AuthGuard } from './_guards/index';
//import { HeroComponent } from './mycomponents/index';
import { HeroesComponent, DashboardComponent } from './mycomponents/index';
import { HeroDetailComponent, EnterMeetingComponent } from './mycomponents/index';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    //{ path: 'heroapp', component: HeroComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'dashboard',component: DashboardComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'detail/:id', component: HeroDetailComponent },


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

//export const routing = RouterModule.forRoot(appRoutes);

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
