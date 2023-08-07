import {Component, OnInit} from '@angular/core';
import {UnregisteredService} from "../unregistered.service";
import {Router} from "@angular/router";
import {Doctor} from "../../model/doctor";

@Component({
    selector: 'app-unregistered-login-doctor',
    templateUrl: './unregistered-login-doctor.component.html',
    styleUrls: ['./unregistered-login-doctor.component.css']
})
export class UnregisteredLoginDoctorComponent implements OnInit {

    constructor(private service: UnregisteredService, private router: Router) {
    }

    ngOnInit(): void {
    }

    username: string;
    password: string;
    message: string;

    loginDoctor() {
        this.service.loginDoctor(this.username, this.password).subscribe((patient: Doctor) => {
            if (patient != null)
                this.router.navigate(['doctor']); // TODO
            this.message = "Error"
            return;
        })
    }
}
