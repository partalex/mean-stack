import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class DoctorService {

    uri = 'http://127.0.0.1:4000'

    constructor(private http: HttpClient, private router: Router) {
    }

    logOut() {
        localStorage.clear()
        this.router.navigate([''])
    }
}
