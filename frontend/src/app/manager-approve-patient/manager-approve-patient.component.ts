import {Component, OnInit} from '@angular/core';
import {Patient} from "../../model/patient";
import {PatientService} from "../services/patient.service";

@Component({
    selector: 'app-manager-approve-patient',
    templateUrl: './manager-approve-patient.component.html',
    styleUrls: ['./manager-approve-patient.component.css']
})
export class ManagerApprovePatientComponent implements OnInit {

    constructor(private patientService: PatientService) {
        this.getAllPatients()
    }

    ngOnInit(): void {
    }

    patients: Patient[]

    buttonApprovedText(patient) {
        if (patient.approved) {
            return "Oduzmi pristup"
        } else {
            return "Dozvoli pristpup"
        }
    }

    getAllPatients() {
        this.patientService.readAll().subscribe((patients: Patient[]) => {
            this.patients = patients
        })
    }

    changeApproved(patientFromButton) {
        patientFromButton.approved = !patientFromButton.approved
        this.patientService.update(patientFromButton).subscribe((patient: Patient) => {
            patientFromButton = patient
        })
        // this.getAllPatients()
    }
}
