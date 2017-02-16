import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent, ServiceLoginComponent } from './login/index';
import { HomeComponent } from './home/index';
import { AuthGuard } from './_guards/index';
import { HeroesComponent, DashboardComponent } from './mycomponents/index';
import { HeroDetailComponent, EnterMeetingComponent } from './mycomponents/index';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'servicelogin', component: ServiceLoginComponent },
    { path: 'heroes', component: HeroesComponent, canActivate: [AuthGuard] },
    { path: 'dashboard',component: DashboardComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

//export const routing = RouterModule.forRoot(appRoutes);

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
