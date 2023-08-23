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
  }

  ngOnInit(): void {
    this.getAllPatients()
    this.getAllDoctors()
  }

  patients: Patient[]
  doctors: Doctor[]

  buttonApprovedText(patient) {
    if (patient.approved) {
      return "Oduzmi"
    } else {
      return "Dozvoli"
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

  changeApprovedPatient(patient) {
    patient.approved = !patient.approved
    this.servicePatient.update(patient).subscribe((newPatient: Patient) => {
      patient = newPatient
      this.ngOnInit()
    })
  }

  changeApprovedDoctor(doctor) {
    doctor.approved = !doctor.approved
    this.serviceDoctor.update(doctor).subscribe((newDoctor: Doctor) => {
      this.ngOnInit()
    })
  }
}
