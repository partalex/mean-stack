import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class ManagerService {

    constructor(private http: HttpClient, private router: Router) {
    }

    uri = 'http://127.0.0.1:4000'

    registerDoctor(firstnameForm, lastnameForm, usernameForm, passwordForm, addressForm, phoneForm, mailForm, licenceIdForm, specializationForm, branchForm) {
        const data = {
            firstname: firstnameForm,
            lastname: lastnameForm,
            username: usernameForm,
            password: passwordForm,
            address: addressForm,
            phone: phoneForm,
            mail: mailForm,
            licenceId: licenceIdForm,
            specialization: specializationForm,
            branch: branchForm
        }

        return this.http.post(`${this.uri}/manager/registerDoctor`, data)
    }

    logOut() {
        localStorage.clear()
        this.router.navigate([''])
    }
}
