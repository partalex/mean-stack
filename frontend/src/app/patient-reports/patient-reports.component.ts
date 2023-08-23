import {Component, OnInit} from '@angular/core';
import {ReportService} from "../services/report.service";
import {Appointment} from "../../model/appointment";
import {AppointmentService} from "../services/appointment.service";
import {ReportsAppointment} from "../../model/help-stuctures/reportAppointment";

@Component({
  selector: 'app-patient-reports',
  templateUrl: './patient-reports.component.html',
  styleUrls: ['./patient-reports.component.css']
})
export class PatientReportsComponent implements OnInit {

  constructor(private serviceReport: ReportService, private serviceAppointment: AppointmentService) {
  }

  ngOnInit(): void {
    let patientId = localStorage.getItem("loggedInPatient")
    this.getMyReports(patientId)
    this.getMyAppointments(patientId)
  }

  reports: ReportsAppointment[]
  appointments: Appointment[]

  getMyReports(patientId) {
    this.serviceReport.readByPatientId(patientId).subscribe((reports: ReportsAppointment[]) => {
      this.reports = reports
    })
  }

  getMyAppointments(patientId) {
    this.serviceAppointment.readByPatientId(patientId).subscribe((appointments: Appointment[]) => {
      this.appointments = appointments
    })
  }

  cancelAppointment(appointment: Appointment) {
    appointment.canceled = !appointment.canceled
    this.serviceAppointment.update(appointment).subscribe((newAppointment: Appointment) => {
      this.ngOnInit()
    })
  }

}
