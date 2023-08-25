import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Patient} from "../../model/patient";

@Injectable({
    providedIn: 'root'
})
export class PatientService {

    constructor(private http: HttpClient, private router: Router) {
    }

    uri = 'http://127.0.0.1:4000/patient'

    create(patient: Patient) {
        return this.http.post(`${this.uri}/create`, {patient: patient})
    }

    read(id) {
        return this.http.post(`${this.uri}/read`, {id: id})
    }

    update(patient: Patient) {
        return this.http.post(`${this.uri}/update`, {patient: patient})
    }

    readAll() {
        return this.http.post(`${this.uri}/readAll`, {})
    }

    logOutPatient() {
        localStorage.removeItem("loggedInPatient")
        this.router.navigate(['/loginPatient'])
    }

}
