import {Component, OnInit} from '@angular/core';
import {ServiceSession} from "../services/session.service";
import {DoctorService} from "../services/doctor.service";
import {Doctor} from "../../model/doctor";

@Component({
    selector: 'app-navigation-unregistered',
    templateUrl: './navigation-unregistered.component.html',
    styleUrls: ['./navigation-unregistered.component.css']
})
export class NavigationUnregisteredComponent implements OnInit {

    constructor(private serviceSession: ServiceSession, private serviceDoctor: DoctorService) {
    }

    ngOnInit(): void {
    }
}
