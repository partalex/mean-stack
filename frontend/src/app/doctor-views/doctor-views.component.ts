import {Component, OnInit} from '@angular/core';
import {AppointmentService} from "../services/appointment.service";
import {Appointment} from "../../model/appointment";
import {AppointmentTypeService} from "../services/appointmentType.service";
import {AppointmentType} from "../../model/appointmentType";
import {Report} from "../../model/report";
import {ReportService} from "../services/report.service";

@Component({
    selector: 'app-doctor-views',
    templateUrl: './doctor-views.component.html',
    styleUrls: ['./doctor-views.component.css']
})
export class DoctorViewsComponent implements OnInit {

    constructor(private serviceAppointment: AppointmentService, private serviceAppointmentType: AppointmentTypeService, private reportService: ReportService) {
    }

    doctorId: string

    ngOnInit(): void {
        this.alert = document.getElementById("alert");
        this.alert.style.visibility = "hidden"
        this.message = ""
        this.doctorId = localStorage.getItem("loggedInDoctor")
        this.readAllByDoctorId(this.doctorId)
        this.readRegisteredAppointments(this.doctorId)
        this.getMyReports(this.doctorId)
        this.newReport = new Report("", "", "")

        this.appointmentsDescendingSorted = false
        this.reportsDescendingSorted = false
        this.getRegularAppointments()

    }

    getRegularAppointments() {
        this.serviceAppointment.readByDoctorIdAndDontHaveReport(this.doctorId).subscribe((appointmentsRegular: Appointment[]) => {
            this.appointmentsRegular = appointmentsRegular
        })
    }

    cancelAppointment(appointment) {
        if (appointment.reasonForCanceling == "") {
            this.message = "Niste uneli razlog otkazivanja."
            this.alert.style.visibility = "visible"
            return
        }

        appointment.canceled = true

        this.serviceAppointment.update(appointment).subscribe((newAppointment: Appointment) => {
            console.log(newAppointment)
            this.ngOnInit()
        })
    }

    toLocalDate(date: Date) {
        return new Date(date).toLocaleDateString()
    }

    toLocaleTimeString(date: Date) {
        return new Date(date).toLocaleTimeString()
    }

    appointments: Appointment[]
    appointmentsRegular: Appointment[]
    registeredAppointmentTypes: AppointmentType[]
    myReports: Report[]
    alert: HTMLElement;
    message: string;
    newReport: Report
    appointmentsDescendingSorted: boolean
    reportsDescendingSorted: boolean

    getMyReports(doctorId) {
        this.reportService.readByDoctorId(doctorId).subscribe((reports: Report[]) => {
            this.myReports = reports
        })
    }

    addReport() {
        if (this.appointmentsRegular.length == 0) {
            this.message = "Nemate zakazanih pregleda."
            this.alert.style.visibility = "visible"
            return
        }

        if (this.newReport.appointmentId == "" || this.newReport.name == "" || this.newReport.description == "" || this.newReport.date == null) {
            this.message = "Niste uneli sve podatke."
            this.alert.style.visibility = "visible"
            return
        }

        this.reportService.create(this.newReport).subscribe(() => {
            this.ngOnInit()
        })

    }

    sortAppointments() {
        this.appointmentsDescendingSorted = !this.appointmentsDescendingSorted
        if (this.appointmentsDescendingSorted)
            this.appointmentsRegular.sort((a, b) => (a.date < b.date) ? 1 : -1)
        else
            this.appointmentsRegular.sort((a, b) => (a.date > b.date) ? 1 : -1)

    }

    getAppointmentTypeName(appointmentId) {
        return this.appointments.find(appointment => appointment._id == appointmentId).appointmentType
    }

    sortReports() {
        this.reportsDescendingSorted = !this.reportsDescendingSorted
        if (this.reportsDescendingSorted)
            this.myReports.sort((a, b) => (a.date < b.date) ? 1 : -1)
        else
            this.myReports.sort((a, b) => (a.date > b.date) ? 1 : -1)
    }

    readRegisteredAppointments(doctorId) {
        this.serviceAppointmentType.readRegisteredDoctor(doctorId).subscribe((registeredAppointments: AppointmentType[]) => {
            this.registeredAppointmentTypes = registeredAppointments
        })
    }

    readAllByDoctorId(doctorId) {
        this.serviceAppointment.readByDoctorId(doctorId).subscribe((appointments: Appointment[]) => {
            this.appointments = appointments
        })
    }


}
