import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PatientService} from "../services/patient.service";

@Component({
    selector: 'app-navigation-patient',
    templateUrl: './navigation-patient.component.html',
    styleUrls: ['./navigation-patient.component.css']
})
export class NavigationPatientComponent implements OnInit {

    constructor(public router: Router, private service: PatientService) {
    }

    ngOnInit(): void {
    }

    logOut() {
        this.service.logOut()
    }

}
