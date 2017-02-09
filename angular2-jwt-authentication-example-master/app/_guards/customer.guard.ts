import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class CustomerGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
        let cuser = localStorage.getItem('currentUser')
        if (cuser) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    }
}