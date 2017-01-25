import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';
import { AuthGuard } from './_guards/index';
//import { HeroComponent } from './mycomponents/index';
import { HeroesComponent, DashboardComponent } from './mycomponents/index';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    //{ path: 'heroapp', component: HeroComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'dashboard',component: DashboardComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);