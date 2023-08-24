import {Component, OnInit} from '@angular/core';
import {Appointment} from "../../model/appointment";
import {AppointmentService} from "../services/appointment.service";
import {AppointmentType} from "../../model/appointmentType";
import {AppointmentTypeService} from "../services/appointmentType.service";
import {Doctor} from "../../model/doctor";
import {ActivatedRoute} from "@angular/router";
import {DoctorService} from "../services/doctor.service";

@Component({
    selector: 'app-patient-schedule-appointment',
    templateUrl: './patient-schedule-appointment.component.html',
    styleUrls: ['./patient-schedule-appointment.component.css']
})
export class PatientScheduleAppointmentComponent implements OnInit {

    constructor(private serviceRouter: ActivatedRoute, private serviceDoctor: DoctorService, private serviceAppointment: AppointmentService, private serviceAppointmentType: AppointmentTypeService) {
    }

    ngOnInit(): void {
        this.patientId = localStorage.getItem("loggedInPatient")
        this.newAppointment = new Appointment("", "", " ", "", "", new Date(new Date().getTime() + 14 * 24 * 60 * 60 * 1000), false, "")
        this.alert = document.getElementById("alert");
        this.alertSuccess = document.getElementById("alertSuccess");
        this.alert.style.visibility = "hidden"
        this.alertSuccess.style.visibility = "hidden"
        this.message = ""

        this.serviceRouter.params.subscribe(params => {
            let id = params['id'];
            this.serviceDoctor.read(id).subscribe((doctor: Doctor) => {
                this.doctor = doctor
                this.readRegisteredAppointments(this.doctor._id)
                this.readAllByDoctorId(this.doctor._id)
            })
        });
    }

    dateToString(date: Date) {
        return new Date(date).toLocaleDateString() + " " + new Date(date).toLocaleTimeString()
    }

    scheduleAppointment() {
        if (this.newAppointment.reason == "" || this.newAppointment.appointmentType == "" || this.newAppointment.date == null) {
            this.message = "Sva polja moraju biti popunjena."
            this.alert.style.visibility = "visible"
            return
        }
        this.newAppointment.doctorId = this.doctor._id
        this.newAppointment.patientId = this.patientId
        this.newAppointment._id = Math.random().toString(36).substr(2, 9);

        this.serviceAppointment.create(this.newAppointment).subscribe((appointment: Appointment) => {
            this.ngOnInit()
        })
    }

    appointments: Appointment[]
    newAppointment: Appointment
    registeredAppointmentTypes: AppointmentType[]
    patientId: string
    doctor: Doctor
    alert: HTMLElement
    alertSuccess: HTMLElement
    message: string

    readAllByDoctorId(doctorId) {
        this.serviceAppointment.readByDoctorId(doctorId).subscribe((appointments: Appointment[]) => {
            this.appointments = appointments
        })
    }

    readRegisteredAppointments(doctorId) {
        this.serviceAppointmentType.readRegisteredDoctor(doctorId).subscribe((registeredAppointments: AppointmentType[]) => {
            this.registeredAppointmentTypes = registeredAppointments
        })
    }

    protected readonly Date = Date;
}
