import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class HomePageService {

    constructor(private http: HttpClient) {
    }

    uri = 'http://127.0.0.1:4000'

    loginDoctor(usernameFromForm, passwordFromForm) {
        const data = {
            username: usernameFromForm,
            password: passwordFromForm
        }
        return this.http.post(`${this.uri}/loginDoctor`, data)
    }

    loginPatient(usernameFromForm, passwordFromForm) {
        const data = {
            username: usernameFromForm,
            password: passwordFromForm
        }
        return this.http.post(`${this.uri}/loginPatient`, data)
    }

    registerPatient(firstnameForm, lastnameForm, usernameForm, passwordForm, addressForm, phoneForm, mailForm) {
        const data = {
            firstname: firstnameForm,
            lastname: lastnameForm,
            username: usernameForm,
            password: passwordForm,
            address: addressForm,
            phone: phoneForm,
            mail: mailForm
        }
        return this.http.post(`${this.uri}/registerPatient`, data)
    }
}
