import {Component, OnInit} from '@angular/core';
import {Specialization} from "../../model/specialization";
import {SpecializationService} from "../services/specialization.service";
import {AppointmentType} from "../../model/appointmentType";
import {AppointmentTypeService} from "../services/appointmentType.service";
import {Appointment} from "../../model/appointment";
import {Doctor} from "../../model/doctor";
import {DoctorService} from "../services/doctor.service";

@Component({
    selector: 'app-manager-medicine-changes',
    templateUrl: './manager-medicine-changes.component.html',
    styleUrls: ['./manager-medicine-changes.component.css']
})
export class ManagerMedicineChangesComponent implements OnInit {

    constructor(private serviceAppointmentType: AppointmentTypeService, private serviceSpecialization: SpecializationService, private serviceDoctor: DoctorService) {

    }

    updateAppointmentType(appointment) {
        console.log(appointment)
        this.serviceAppointmentType.update(appointment).subscribe(() => {
            this.ngOnInit()
        })
    }

    deleteAppointmentType(appointmentType) {
        this.serviceAppointmentType.delete(appointmentType).subscribe(() => {
            this.ngOnInit()
        })
    }

    approveChange(appointment) {
        appointment.approved = !appointment.approved
        this.serviceAppointmentType.update(appointment).subscribe(() => {
            this.ngOnInit()
        })
    }

    ngOnInit(): void {
        this.getAllAppointmentTypes()
        this.getAllSpecializations()
        this.getAllDoctors()
        this.newSpecialization = ""
    }

    appointmentTypes: AppointmentType[]
    newAppointmentType: AppointmentType = new AppointmentType("", "", "", "", [], 0, false)
    specializations: Specialization[]
    doctors: Doctor[]
    newSpecialization = ""

    getAllDoctors() {
        this.serviceDoctor.readAll().subscribe((doctors: Doctor[]) => {
            this.doctors = doctors
        })
    }

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

    addSpecialization() {
        let specialization = new Specialization(this.newSpecialization)
        this.serviceSpecialization.create(specialization).subscribe(() => {
            this.ngOnInit()
        })
    }

    addAppointmentType() {
        this.newAppointmentType.descriptionStrong = this.newAppointmentType._id
        console.log(this.newAppointmentType)
        this.serviceAppointmentType.create(this.newAppointmentType).subscribe(() => {
            this.ngOnInit()
        })
    }
}
