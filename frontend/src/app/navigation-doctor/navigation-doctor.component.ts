import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-navigation-doctor',
    templateUrl: './navigation-doctor.component.html',
    styleUrls: ['./navigation-doctor.component.css']
})
export class NavigationDoctorComponent implements OnInit {

    constructor(public router: Router) {
    }

    ngOnInit(): void {
    }

    protected readonly decodeURI = decodeURI;
    protected readonly decodeURIComponent = decodeURIComponent;

    logOut() {
        // TODO - close session
        this.router.navigate(['/']);
    }
}
