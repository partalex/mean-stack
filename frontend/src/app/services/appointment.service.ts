import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Appointment} from "../../model/appointment";


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  uri = 'http://127.0.0.1:4000/appointment'

  constructor(private http: HttpClient) {
  }

  create(appointment: Appointment) {
    return this.http.post(`${this.uri}/create`, {appointment: appointment})
  }

  read(id) {
    return this.http.post(`${this.uri}/read`, {id: id})
  }

  update(appointment: Appointment) {
    return this.http.post(`${this.uri}/update`, {appointment: appointment})
  }

  delete(id) {
    return this.http.post(`${this.uri}/delete`, {id: id})
  }

  readAll() {
    return this.http.post(`${this.uri}/readAll`, {})
  }

  readByDoctorId(doctorId) {
    return this.http.post(`${this.uri}/readByDoctorId`, {doctorId: doctorId})
  }

  readByPatientId(patientId) {
    return this.http.post(`${this.uri}/readByPatientId`, {patientId: patientId})
  }

}
