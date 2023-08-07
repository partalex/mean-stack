import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-navigation-patient',
    templateUrl: './navigation-patient.component.html',
    styleUrls: ['./navigation-patient.component.css']
})
export class NavigationPatientComponent implements OnInit {

    constructor(public router: Router) {
    }

    ngOnInit(): void {
    }

    logOut() {
        // TODO - close session
        this.router.navigate(['/']);
    }

}
