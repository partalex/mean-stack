import {Component, OnInit} from '@angular/core';
import {ServiceSession} from "../services/session.service";
import {Router} from "@angular/router";
import {Doctor} from "../../model/doctor";

@Component({
    selector: 'app-unregistered-login-doctor',
    templateUrl: './unregistered-login-doctor.component.html',
    styleUrls: ['./unregistered-login-doctor.component.css']
})
export class UnregisteredLoginDoctorComponent implements OnInit {

    constructor(private serviceSession: ServiceSession, private router: Router) {
    }

    ngOnInit(): void {
        this.alert = document.getElementById("alert");
        this.alert.style.visibility = "hidden"
    }

    username: string;
    password: string;
    message: string;
    alert: HTMLElement;

    loginDoctor() {
        if (this.username == "" || this.password == "") {
            this.message = "Niste uneli sve podatke."
            this.alert.style.visibility = "visible"
            return
        }
        this.serviceSession.loginDoctor(this.username, this.password).subscribe((doctor: Doctor) => {
            if (doctor != null) {
                if (doctor.approved) {
                    localStorage.setItem("loggedInDoctor", doctor._id)
                    this.router.navigate(["doctor"]).then(r => console.log(r))
                } else {
                    this.message = "Niste još uvek odobreni."
                    this.alert.style.visibility = "visible"
                    return
                }
            } else {
                this.message = "Losi podaci!";
                this.alert.style.visibility = "visible"
                return
            }
        })
    }
}
