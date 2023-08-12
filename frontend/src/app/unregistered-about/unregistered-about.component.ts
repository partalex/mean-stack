import {Component, OnInit} from '@angular/core';
import {Appointment} from "../../model/appointment";
import {AppointmentService} from "../services/appointment.service";

@Component({
    selector: 'app-unregistered-about',
    templateUrl: './unregistered-about.component.html',
    styleUrls: ['./unregistered-about.component.css']
})
export class UnregisteredAboutComponent implements OnInit {

    constructor(private service: AppointmentService) {
    }

    ngOnInit(): void {
        this.getAllAppointments()
    }

    appointments: Appointment[];

    getAllAppointments() {
        this.service.readAll().subscribe((appointments: Appointment[]) => {
            this.appointments = appointments;
        })
    }
}
