import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class DoctorService {

    uri = 'http://127.0.0.1:4000'

    constructor(private http: HttpClient) {
    }

    logOut() {
        return this.http.post(`${this.uri}/doctor/logOut`, {})
    }
}
