import {Component, OnInit} from '@angular/core';
import {ServiceSession} from "../services/service-session.service";
import {Router} from "@angular/router";
import {Patient} from "../../model/patient";

@Component({
    selector: 'app-unregistered-login-patient',
    templateUrl: './unregistered-login-patient.component.html',
    styleUrls: ['./unregistered-login-patient.component.css']
})
export class UnregisteredLoginPatientComponent implements OnInit {

    constructor(private service: ServiceSession, private router: Router) {
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
        if (this.username == "" || this.password == "") {
            this.message = "Niste uneli sve podatke."
            this.alert.style.visibility = "visible"
            return
        }
        this.service.loginPatient(this.username, this.password).subscribe((patient: Patient) => {
            if (patient != null) {
                if (patient.approved) {
                    localStorage.setItem("loggedInPatient", patient._id)
                    this.router.navigate(["patient"])
                } else {
                    this.message = "Niste još uvek odobreni."
                    this.alert.style.visibility = "visible"
                    return
                }
            } else {
                this.message = "Losi podaci!";
                this.alert.style.visibility = "visible"
                console.log(this.message)
                return
            }
        })
    }
}
