import {Component, OnInit} from '@angular/core';
import {ServiceSession} from "../services/service-session.service";
import {Router} from "@angular/router";
import {Doctor} from "../../model/doctor";

@Component({
    selector: 'app-unregistered-login-doctor',
    templateUrl: './unregistered-login-doctor.component.html',
    styleUrls: ['./unregistered-login-doctor.component.css']
})
export class UnregisteredLoginDoctorComponent implements OnInit {

    constructor(private service: ServiceSession, private router: Router) {
    }

    ngOnInit(): void {
        let loggedInUser = localStorage.getItem("loggedInUser");
        loggedInUser = loggedInUser == null ? "" : loggedInUser;
    }

    username: string;
    password: string;
    message: string;

    loginDoctor() {
        this.service.loginDoctor(this.username, this.password).subscribe((doctor: Doctor) => {
            if (this.username == "" || this.password == "") {
                this.message = "Niste uneli sve podatke!";
                return;
            }
            this.message = "";
            if (doctor != null) {
                localStorage.setItem("loggedInDoctor", doctor._id)
                this.router.navigate(["doctor"])
            } else {
                this.message = "Losi podaci!";
                return;
            }
        })
    }
}
