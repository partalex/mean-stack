import {Component, OnInit} from '@angular/core';
import {Patient} from "../../model/patient";
import {Router} from "@angular/router";
import {HomePageService} from "../home-page.service";

@Component({
    selector: 'app-login-patient',
    templateUrl: './login-patient.component.html',
    styleUrls: ['./login-patient.component.css']
})
export class LoginPatientComponent implements OnInit {

    constructor(private service: HomePageService, private router: Router) {
    }

    ngOnInit(): void {
    }

    username: string;
    password: string;
    message: string;

    loginPatient() {
        this.service.loginPatient(this.username, this.password).subscribe((patient: Patient) => {
            if (patient != null)
                this.router.navigate(['patient']); // TODO
            this.message = "Error"
            return;
        })
    }
}
