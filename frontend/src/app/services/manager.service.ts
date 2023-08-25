import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Manager} from "../../model/manager";

@Injectable({
    providedIn: 'root'
})
export class ManagerService {

    constructor(private http: HttpClient, private router: Router) {
    }

    uri = 'http://127.0.0.1:4000/manager'

    logOutManager() {
        localStorage.removeItem("loggedInManager")
        this.router.navigate(['/loginManager']).then(r => console.log(r))
    }

    create(manager: Manager) {
        return this.http.post(`${this.uri}/create`, {manager: manager})
    }

    readAll() {
        return this.http.post(`${this.uri}/readAll`, {})
    }

    update(manager: Manager) {
        return this.http.post(`${this.uri}/update`, {manager: manager})
    }
}
