import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../_services/index';

@Component({
    moduleId: module.id,
    template: 
    `
    <div class="col-md-6 col-md-offset-3">
        <h1>Enter meeting</h1>
        <p>You're logged in with JWT!!</p>
        <div>
            Users from secure api end point:
            <ul>
                <li *ngFor="let user of users">{{user.username}} {{user.email}}</li>
            </ul>
        </div>
        <p><a [routerLink]="['/login']">Logout</a></p>
    </div>
    `
})

export class EnterMeetingComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
    }

    login() {
        this.loading = true;
        this.authenticationService.loginCustomer(this.model.username, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    this.router.navigate(['/']);
                } else {
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });
    }
}
