import {Component, OnInit} from '@angular/core';
import {PatientService} from "../services/patient.service";
import {AppointmentService} from "../services/appointment.service";
import {Appointment} from "../../model/appointment";
import {Specialization} from "../../model/specialization";
import {SpecializationService} from "../services/specialization.service";

@Component({
    selector: 'app-manager-medicine-changes',
    templateUrl: './manager-medicine-changes.component.html',
    styleUrls: ['./manager-medicine-changes.component.css']
})
export class ManagerMedicineChangesComponent implements OnInit {

    constructor(private serviceAppointment: AppointmentService, private serviceSpecialization: SpecializationService) {
        this.getAllAppointments()
        this.getAllSpecializations()
    }

    ngOnInit(): void {
    }

    appointments: Appointment[]
    specializations: Specialization[]

    getAllAppointments() {
        this.serviceAppointment.readAll().subscribe((appointments: Appointment[]) => {
            this.appointments = appointments
        })
    }

    getAllSpecializations() {
        this.serviceSpecialization.readAll().subscribe((specializations: Specialization[]) => {
            this.specializations = specializations
        })
    }
}
