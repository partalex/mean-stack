import {Component, OnInit} from '@angular/core';
import {Doctor} from "../../model/doctor";
import {DoctorService} from "../services/doctor.service";
import {Patient} from "../../model/patient";
import {PatientService} from "../services/patient.service";

@Component({
    selector: 'app-manager-profile',
    templateUrl: './manager-profile.component.html',
    styleUrls: ['./manager-profile.component.css']
})
export class ManagerProfileComponent implements OnInit {

    constructor(private serviceDoctor: DoctorService, private servicePatient: PatientService) {
    }

    ngOnInit(): void {
        this.getAllDoctors()
        this.getAllPatients()
    }

    doctors: Doctor[]
    patients: Patient[]

    getAllDoctors() {
        this.serviceDoctor.readAll().subscribe((doctors: Doctor[]) => {
            this.doctors = doctors
        })
    }

    getAllPatients() {
        this.servicePatient.readAll().subscribe((patients: Patient[]) => {
            this.patients = patients
        })
    }

}
