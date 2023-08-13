import {Component, OnInit} from '@angular/core';
import {Patient} from "../../model/patient";
import {PatientService} from "../services/patient.service";
import {Doctor} from "../../model/doctor";
import {DoctorService} from "../services/doctor.service";

@Component({
    selector: 'app-manager-approve-patient',
    templateUrl: './manager-approve-patient.component.html',
    styleUrls: ['./manager-approve-patient.component.css']
})
export class ManagerApprovePatientComponent implements OnInit {

    constructor(private servicePatient: PatientService, private serviceDoctor: DoctorService) {
        this.getAllPatients()
        this.getAllDoctors()
    }

    ngOnInit(): void {
    }

    patients: Patient[]
    doctors: Doctor[]

    buttonApprovedText(patient) {
        if (patient.approved) {
            return "Oduzmi pristup"
        } else {
            return "Dozvoli pristpup"
        }
    }

    getAllPatients() {
        this.servicePatient.readAll().subscribe((patients: Patient[]) => {
            this.patients = patients
        })
    }

    getAllDoctors() {
        this.serviceDoctor.readAll().subscribe((doctors: Doctor[]) => {
            this.doctors = doctors
        })
    }

    changeApproved(patientFromButton) {
        patientFromButton.approved = !patientFromButton.approved
        this.servicePatient.update(patientFromButton).subscribe((patient: Patient) => {
            patientFromButton = patient
        })
        // this.getAllPatients()
    }
}
