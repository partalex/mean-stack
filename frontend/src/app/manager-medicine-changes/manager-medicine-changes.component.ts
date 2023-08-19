import {Component, OnInit} from '@angular/core';
import {Specialization} from "../../model/specialization";
import {SpecializationService} from "../services/specialization.service";
import {AppointmentType} from "../../model/appointmentType";
import {AppointmentTypeService} from "../services/appointmentType.service";

@Component({
    selector: 'app-manager-medicine-changes',
    templateUrl: './manager-medicine-changes.component.html',
    styleUrls: ['./manager-medicine-changes.component.css']
})
export class ManagerMedicineChangesComponent implements OnInit {

    constructor(private serviceAppointmentType: AppointmentTypeService, private serviceSpecialization: SpecializationService) {
        this.getAllAppointmentTypes()
        this.getAllSpecializations()
    }

    ngOnInit(): void {
    }

    appointmentTypes: AppointmentType[]
    specializations: Specialization[]

    getAllAppointmentTypes() {
        this.serviceAppointmentType.readAll().subscribe((appointmentTypes: AppointmentType[]) => {
            this.appointmentTypes = appointmentTypes
        })
    }

    getAllSpecializations() {
        this.serviceSpecialization.readAll().subscribe((specializations: Specialization[]) => {
            this.specializations = specializations
        })
    }
}
