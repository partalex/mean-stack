import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Appointment} from "../../model/appointment";


@Injectable({
    providedIn: 'root'
})
export class AppointmentService {

    uri = 'http://127.0.0.1:4000/appointment'

    constructor(private http: HttpClient, private router: Router) {
    }

    readAll() {
        return this.http.post(`${this.uri}/readAll`, {})
    }

    create() {
        return this.http.post(`${this.uri}/create`, {})
    }

    update(appointment: Appointment) {
        return this.http.post(`${this.uri}/update`, {appointment})
    }

    delete(idForm) {
        return this.http.post(`${this.uri}/delete`, {id: idForm})
    }
}
