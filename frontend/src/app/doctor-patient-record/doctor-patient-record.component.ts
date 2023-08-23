import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PatientService} from "../services/patient.service";
import {Patient} from "../../model/patient";
import {ReportsAppointment} from "../../model/help-stuctures/reportAppointment";
import {Appointment} from "../../model/appointment";
import {ReportService} from "../services/report.service";
import {AppointmentService} from "../services/appointment.service";

@Component({
  selector: 'app-doctor-patient-record',
  templateUrl: './doctor-patient-record.component.html',
  styleUrls: ['./doctor-patient-record.component.css']
})
export class DoctorPatientRecordComponent implements OnInit {

  constructor(private serviceRouter: ActivatedRoute, private servicePatient: PatientService, private serviceReport: ReportService, private serviceAppointment: AppointmentService) {
  }

  ngOnInit(): void {
    this.serviceRouter.params.subscribe(params => {
      let id = params['id'];
      this.servicePatient.read(id).subscribe((patient: Patient) => {
        this.patient = patient
        console.log(this.patient)
        this.getReports(this.patient._id)
        this.getAppointments(this.patient._id)
      })
    });
  }

  patient: Patient
  reports: ReportsAppointment[]
  appointments: Appointment[]

  getReports(patientId) {
    this.serviceReport.readByPatientId(patientId).subscribe((reports: ReportsAppointment[]) => {
      this.reports = reports
    })
  }

  getAppointments(patientId) {
    this.serviceAppointment.readByPatientId(patientId).subscribe((appointments: Appointment[]) => {
      this.appointments = appointments
    })
  }

}
