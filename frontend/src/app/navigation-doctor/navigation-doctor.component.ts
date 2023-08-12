import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ManagerService} from "../services/manager.service";
import {DoctorService} from "../services/doctor.service";

@Component({
    selector: 'app-navigation-doctor',
    templateUrl: './navigation-doctor.component.html',
    styleUrls: ['./navigation-doctor.component.css']
})
export class NavigationDoctorComponent implements OnInit {

    constructor(private http: HttpClient, private service: DoctorService) {
    }

    ngOnInit(): void {
    }

    protected readonly decodeURI = decodeURI;
    protected readonly decodeURIComponent = decodeURIComponent;

    logOut() {
        this.service.logOutDoctor()
    }
}
