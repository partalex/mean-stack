import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Specialization} from "../../model/specialization";

@Injectable({
    providedIn: 'root'
})
export class SpecializationService {

    constructor(private http: HttpClient) {
    }

    uri = 'http://127.0.0.1:4000/specialization'

    create(specialization: Specialization) {
        return this.http.post(`${this.uri}/create`, {specialization: specialization})
    }

    read(id) {
        return this.http.post(`${this.uri}/read`, {id: id})
    }

    update(specialization: Specialization) {
        return this.http.post(`${this.uri}/update`, {specialization: specialization})
    }

    delete(id) {
        return this.http.post(`${this.uri}/delete`, {id: id})
    }

    readAll() {
        return this.http.post(`${this.uri}/readAll`, {})
    }

}
