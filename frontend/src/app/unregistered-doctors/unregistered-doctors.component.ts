import {Component, OnInit} from '@angular/core';
import {Doctor} from "../../model/doctor";
import {DoctorService} from "../services/doctor.service";
import {Patient} from "../../model/patient";

@Component({
    selector: 'app-unregistered-doctors',
    templateUrl: './unregistered-doctors.component.html',
    styleUrls: ['./unregistered-doctors.component.css']
})
export class UnregisteredDoctorsComponent implements OnInit {

    constructor(private serviceDoctor: DoctorService) {
        this.getAllDoctors()
    }

    doctors: Doctor[]

    ngOnInit(): void {
    }

    getAllDoctors() {
        this.serviceDoctor.readAll().subscribe((doctors: Doctor[]) => {
            this.doctors = doctors
        })
    }


}
