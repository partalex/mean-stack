import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Doctor} from "../../model/doctor";


@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  uri = 'http://127.0.0.1:4000/doctor'

  constructor(private http: HttpClient, private router: Router) {
  }

  create(doctor: Doctor) {
    return this.http.post(`${this.uri}/create`, {doctor: doctor})
  }

  read(id) {
    return this.http.post(`${this.uri}/read`, {id: id})
  }

  update(doctor) {
    return this.http.post(`${this.uri}/create`, {doctor: doctor})
  }

  delete(id) {
    return this.http.post(`${this.uri}/delete`, {id: id})
  }

  readByUsername(username) {
    return this.http.post(`${this.uri}/readByUsername`, {username: username})
  }

  readByMail(mail) {
    return this.http.post(`${this.uri}/readByMail`, {mail: mail})
  }

  readAll() {
    return this.http.post(`${this.uri}/readAll`, {})
  }

  logOutDoctor() {
    localStorage.removeItem("loggedInDoctor")
    this.router.navigate(['/loginDoctor']).then(r => console.log(r))
  }

  search(search) {
    return this.http.post(`${this.uri}/search`, {search: search})
  }

  readAllJoinSpecialization() {
    return this.http.post(`${this.uri}/readAllJoinSpecialization`, {})
  }


}
