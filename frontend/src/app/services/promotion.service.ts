import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Promotion} from "../../model/promotion";

@Injectable({
    providedIn: 'root'
})
export class PatientService {

    constructor(private http: HttpClient, private router: Router) {
    }

    uri = 'http://127.0.0.1:4000/promotion'

    create(promotion: Promotion) {
        return this.http.post(`${this.uri}/create`, promotion)
    }

    read(id) {
        return this.http.post(`${this.uri}/read`, {id: id})
    }

    update(promotion: Promotion) {
        return this.http.post(`${this.uri}/update`, {report: promotion})
    }

    delete(id) {
        return this.http.post(`${this.uri}/delete`, {id: id})
    }
}
