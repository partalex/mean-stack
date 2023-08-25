import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppointmentType} from "../../model/appointmentType";


@Injectable({
    providedIn: 'root'
})
export class AppointmentTypeService {

    uri = 'http://127.0.0.1:4000/appointmentType'

    constructor(private http: HttpClient) {
    }

    create(appointmentType: AppointmentType) {
        return this.http.post(`${this.uri}/create`, {appointmentType: appointmentType})
    }

    read(id) {
        return this.http.post(`${this.uri}/read`, {id: id})
    }

    update(appointmentType: AppointmentType) {
        return this.http.post(`${this.uri}/update`, {appointmentType: appointmentType})
    }

    delete(id) {
        return this.http.post(`${this.uri}/delete`, {id: id})
    }

    readAll() {
        return this.http.post(`${this.uri}/readAll`, {})
    }

    readByDoctorId(id) {
        return this.http.post(`${this.uri}/readAll`, {id: id})
    }

    readRegisteredDoctor(doctorId) {
        return this.http.post(`${this.uri}/readRegisteredDoctor`, {doctorId: doctorId})
    }

}
