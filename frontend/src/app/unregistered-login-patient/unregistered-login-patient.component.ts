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
    }

    username: string;
    password: string;
    message: string;

    loginPatient() {
        this.service.loginPatient(this.username, this.password).subscribe((patient: Patient) => {
            if (patient != null) {
                localStorage.setItem("loggedInPatient", patient.username)
                this.router.navigate([patient])
            } else {
                this.message = "Losi podaci!";
                return;
            }
        })
    }
}
