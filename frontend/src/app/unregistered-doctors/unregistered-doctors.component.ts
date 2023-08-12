import {Component, OnInit} from '@angular/core';
import {Doctor} from "../../model/doctor";
import {DoctorService} from "../services/doctor.service";

@Component({
    selector: 'app-unregistered-doctors',
    templateUrl: './unregistered-doctors.component.html',
    styleUrls: ['./unregistered-doctors.component.css']
})
export class UnregisteredDoctorsComponent implements OnInit {

    constructor(private service: DoctorService) {
    }

    doctors: Doctor[]

    ngOnInit(): void {
    }

    getAllDoctors() {
        this.service.readAll().subscribe((doctors: Doctor[]) => {
            this.doctors = doctors;
        })

    }

}
