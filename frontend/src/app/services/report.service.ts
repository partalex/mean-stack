import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Report} from "../../model/report";

@Injectable({
    providedIn: 'root'
})
export class ReportService {

    constructor(private http: HttpClient) {
    }

    uri = 'http://127.0.0.1:4000/report'

    create(report: Report) {
        return this.http.post(`${this.uri}/create`, {report: report})
    }

    read(id) {
        return this.http.post(`${this.uri}/read`, {id: id})
    }

    update(report: Report) {
        return this.http.post(`${this.uri}/update`, {report: report})
    }

    delete(id) {
        return this.http.post(`${this.uri}/delete`, {id: id})
    }

    readAll() {
        return this.http.post(`${this.uri}/readAll`, {})
    }

    readByPatientId(patientId) {
        return this.http.post(`${this.uri}/readByPatientId`, {patientId: patientId})
    }
}
