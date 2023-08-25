import {Component, OnInit} from '@angular/core';
import {ReportService} from "../services/report.service";
import {Appointment} from "../../model/appointment";
import {AppointmentService} from "../services/appointment.service";
import {ReportsAppointment} from "../../model/help-stuctures/reportAppointment";
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

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
        this.reportsNonDescendingSorted = false
        this.appointmentsNonDescendingSorted = false
    }

    reports: ReportsAppointment[]
    appointments: Appointment[]
    reportsNonDescendingSorted: boolean
    appointmentsNonDescendingSorted: boolean

    sortReports() {
        if (this.reportsNonDescendingSorted) {
            this.reports.sort((a, b) => {
                return new Date(a.date).getTime() - new Date(b.date).getTime()
            })
            this.reportsNonDescendingSorted = false
        } else {
            this.reports.sort((a, b) => {
                return new Date(b.date).getTime() - new Date(a.date).getTime()
            })
            this.reportsNonDescendingSorted = true
        }
    }

    sortAppointments() {
        if (this.appointmentsNonDescendingSorted) {
            this.appointments.sort((a, b) => {
                return new Date(a.date).getTime() - new Date(b.date).getTime()
            })
            this.appointmentsNonDescendingSorted = false
        } else {
            this.appointments.sort((a, b) => {
                return new Date(b.date).getTime() - new Date(a.date).getTime()
            })
            this.appointmentsNonDescendingSorted = true
        }

    }

    toLocalDate(date: Date) {
        return new Date(date).toLocaleDateString()
    }

    toLocaleTimeString(date: Date) {
        return new Date(date).toLocaleTimeString()
    }

    toPdf() {
        let doc = new jsPDF()
        autoTable(doc, {html: '#tableReports'})
        doc.save('table.pdf')
        // sava to
    }


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
        this.serviceAppointment.update(appointment).subscribe(() => {
            this.ngOnInit()
        })
    }

}
