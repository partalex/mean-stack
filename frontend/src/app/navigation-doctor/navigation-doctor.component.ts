import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DoctorService} from "../services/doctor.service";

@Component({
    selector: 'app-navigation-doctor',
    templateUrl: './navigation-doctor.component.html',
    styleUrls: ['./navigation-doctor.component.css']
})
export class NavigationDoctorComponent implements OnInit {

    constructor(private http: HttpClient, private serviceDoctor: DoctorService) {
    }

    ngOnInit(): void {
    }

    protected readonly decodeURI = decodeURI;
    protected readonly decodeURIComponent = decodeURIComponent;

    logOut() {
        this.serviceDoctor.logOutDoctor()
    }
}
