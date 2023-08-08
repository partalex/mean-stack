import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UnregisteredService {

  constructor(private http: HttpClient) {
  }

  uri = 'http://127.0.0.1:4000/unregistered'

  loginDoctor(usernameForm, passwordForm) {
    const data = {
      username: usernameForm,
      password: passwordForm
    }
    return this.http.post(`${this.uri}/loginDoctor`, data)
  }

  loginManager(usernameForm, passwordForm) {
    const data = {
      username: usernameForm,
      password: passwordForm
    }
    return this.http.post(`${this.uri}/loginManager`, data)
  }

  loginPatient(usernameForm, passwordForm) {
    const data = {
      username: usernameForm,
      password: passwordForm
    }
    return this.http.post(`${this.uri}/loginPatient`, data)
  }


  registerPatient(firstnameForm, lastnameForm, usernameForm, passwordForm, addressForm, phoneForm, mailForm) {
    const data = {
      firstname: firstnameForm,
      lastname: lastnameForm,
      username: usernameForm,
      password: passwordForm,
      address: addressForm,
      phone: phoneForm,
      mail: mailForm
    }
    return this.http.post(`${this.uri}/registerPatient`, data)
  }
}
