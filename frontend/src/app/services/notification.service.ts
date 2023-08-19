import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Notification} from "../../model/notification";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient) {
  }

  uri = 'http://127.0.0.1:4000/notification'

  create(notification: Notification) {
    return this.http.post(`${this.uri}/create`, {notification: notification})
  }

  read(id) {
    return this.http.post(`${this.uri}/read`, {id: id})
  }

  update(notification: Notification) {
    return this.http.post(`${this.uri}/update`, {notification: notification})
  }

  delete(id) {
    return this.http.post(`${this.uri}/delete`, {id: id})
  }

  readAll() {
    return this.http.post(`${this.uri}/readAll`, {})
  }

  readAllByPatientId(patientId) {
    return this.http.post(`${this.uri}/readAllByPatientId`, {patientId: patientId})
  }
}
