import {Component, OnInit} from '@angular/core';
import {UnregisteredService} from "../services/unregistered.service";
import {Router} from "@angular/router";
import {Patient} from "../../model/patient";

@Component({
  selector: 'app-unregistered-login-patient',
  templateUrl: './unregistered-login-patient.component.html',
  styleUrls: ['./unregistered-login-patient.component.css']
})
export class UnregisteredLoginPatientComponent implements OnInit {

  constructor(private service: UnregisteredService, private router: Router) {
  }

  ngOnInit(): void {
    this.alert = document.getElementById("alert");
    this.alert.style.visibility = "hidden"
  }

  username: string;
  password: string;
  message: string;
  alert: HTMLElement;

  loginPatient() {
    this.service.loginPatient(this.username, this.password).subscribe((patient: Patient) => {
      if (this.username == "" || this.password == "") {
        this.message = "Niste uneli sve podatke!"
        this.alert.style.visibility = "visible"
        return
      }
      if (patient != null) {
        localStorage.setItem("loggedInPatient", patient.username)
        this.router.navigate(["patient"])
      } else {
        this.message = "Losi podaci!";
        this.alert.style.visibility = "visible"
        return
      }
    })
  }
}
