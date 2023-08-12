import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private http: HttpClient, private router: Router) {
  }

  uri = 'http://127.0.0.1:4000/manager'

  registerDoctor(firstnameForm, lastnameForm, usernameForm, passwordForm, addressForm, phoneForm, mailForm, licenceIdForm, specializationForm, branchForm, imageForm) {
    const data = {
      firstname: firstnameForm,
      lastname: lastnameForm,
      username: usernameForm,
      password: passwordForm,
      address: addressForm,
      phone: phoneForm,
      mail: mailForm,
      image: imageForm,
      licenceId: licenceIdForm,
      specialization: specializationForm,
      branch: branchForm
    }

    return this.http.post(`${this.uri}/registerDoctor`, data)
  }

  checkDoctorUsername(usernameForm) {
    const data = {
      username: usernameForm
    }
    return this.http.post(`${this.uri}/checkDoctorUsername`, data)
  }

  checkDoctorMail(mailForm) {
    const data = {
      mail: mailForm
    }
    return this.http.post(`${this.uri}/checkDoctorMail`, data)
  }

  logOutManager() {
    localStorage.removeItem("loggedInManager")
    this.router.navigate([''])
  }
}
