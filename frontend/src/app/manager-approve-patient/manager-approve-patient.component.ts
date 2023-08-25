import {Component, OnInit} from '@angular/core';
import {Patient} from "../../model/patient";
import {PatientService} from "../services/patient.service";
import {Doctor} from "../../model/doctor";
import {DoctorService} from "../services/doctor.service";
import {Specialization} from "../../model/specialization";
import {SpecializationService} from "../services/specialization.service";
import {Manager} from "../../model/manager";
import {ManagerService} from "../services/manager.service";

@Component({
    selector: 'app-manager-approve-patient',
    templateUrl: './manager-approve-patient.component.html',
    styleUrls: ['./manager-approve-patient.component.css']
})
export class ManagerApprovePatientComponent implements OnInit {

    constructor(private servicePatient: PatientService, private serviceDoctor: DoctorService, private specializationService: SpecializationService
        , private serviceManager: ManagerService) {
    }

    ngOnInit(): void {
        this.getAllPatients()
        this.getAllDoctors()
        this.getAllManagers()
        this.getAllSpecializations()
        this.alert = document.getElementById("alert")
        this.alert.style.visibility = "hidden"
        this.message = ""
    }

    patients: Patient[]
    doctors: Doctor[]
    managers: Manager[]
    specializations: Specialization[]
    message: string
    alert: HTMLElement;

    getAllManagers() {
        this.serviceManager.readAll().subscribe((managers: Manager[]) => {
            this.managers = managers
        })
    }

    getAllSpecializations() {
        this.specializationService.readAll().subscribe((specializations: Specialization[]) => {
            this.specializations = specializations
        })
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

    changePatient(patient) {
        this.servicePatient.update(patient).subscribe((newPatient: Patient) => {
            patient = newPatient
            this.ngOnInit()
        })
    }

    changeDoctor(doctor) {
        this.serviceDoctor.update(doctor).subscribe(() => {
            this.ngOnInit()
        })
    }

    changeManager(manager) {
        this.serviceManager.update(manager).subscribe(() => {
            this.ngOnInit()
        })
    }
}
