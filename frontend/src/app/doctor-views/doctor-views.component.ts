import {Component, OnInit} from '@angular/core';
import {AppointmentService} from "../services/appointment.service";
import {Appointment} from "../../model/appointment";
import {AppointmentTypeService} from "../services/appointmentType.service";
import {AppointmentType} from "../../model/appointmentType";

@Component({
    selector: 'app-doctor-views',
    templateUrl: './doctor-views.component.html',
    styleUrls: ['./doctor-views.component.css']
})
export class DoctorViewsComponent implements OnInit {

    constructor(private serviceAppointment: AppointmentService, private serviceAppointmentType: AppointmentTypeService) {
    }

    doctorId: string

    ngOnInit(): void {
        this.doctorId = localStorage.getItem("loggedInDoctor")
        this.readAllByDoctorId(this.doctorId)
        this.readRegisteredAppointments(this.doctorId)
    }


    appointments: Appointment[]
    registeredAppointments: AppointmentType[]

    readRegisteredAppointments(doctorId) {
        this.serviceAppointmentType.readRegisteredDoctor(doctorId).subscribe((registeredAppointments: AppointmentType[]) => {
            this.registeredAppointments = registeredAppointments
        })
    }

    readAllByDoctorId(doctorId) {
        this.serviceAppointment.readByDoctorId(doctorId).subscribe((appointments: Appointment[]) => {
            this.appointments = appointments
        })
    }
}
