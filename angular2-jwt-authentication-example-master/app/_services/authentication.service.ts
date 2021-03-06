﻿import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    public token: string;

    constructor(private http: Http) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string, authurl: string): Observable<boolean> {
        let body = JSON.stringify({ username: username, password: password });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        return this.http.post(authurl, body, options)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                let groups = response.json() && response.json().user.groups;
                let group = groups.length > 0 && groups[0].name;
                if (token) {
                    // set token property
                    this.token = token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, group: group, token: token }));
                    localStorage.setItem('currentUserGroup', group);

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }

    loginCustomer(username: string, password: string) : Observable<boolean> 
    {
        return this.login(username, password, 'http://localhost:8000/api/customerauth')
    }

    loginService(username: string, password: string) : Observable<boolean> 
    {
        return this.login(username, password, 'http://localhost:8000/api/serviceauth')
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
        localStorage.removeItem('currentUserGroup');
    }
    
    isLoggedIn() : boolean {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        return false;
    }

    isCustomerLoggedIn() : boolean {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            let cusergroup = localStorage.getItem('currentUserGroup');
            return (cusergroup && cusergroup === "Customer");
        }
        return false;
    }
}