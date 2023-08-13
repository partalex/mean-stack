import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class ServiceSession {

    constructor(private http: HttpClient) {
    }

    uri = 'http://127.0.0.1:4000/unregistered'

    loginDoctor(username, password) {
        const data = {
            username: username,
            password: password
        }
        return this.http.post(`${this.uri}/loginDoctor`, data)
    }

    loginManager(username, password) {
        const data = {
            username: username,
            password: password
        }
        return this.http.post(`${this.uri}/loginManager`, data)
    }

    loginPatient(username, password) {
        const data = {
            username: username,
            password: password
        }
        return this.http.post(`${this.uri}/loginPatient`, data)
    }

    registerPatient(patient) {
        return this.http.post(`${this.uri}/registerPatient`, {patient: patient})
    }
}
