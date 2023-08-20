import {Component, OnInit} from '@angular/core';
import {AppointmentType} from "../../model/appointmentType";
import {AppointmentTypeService} from "../services/appointmentType.service";
import {Specialization} from "../../model/specialization";
import {SpecializationService} from "../services/specialization.service";

@Component({
    selector: 'app-doctor-any',
    templateUrl: './doctor-any.component.html',
    styleUrls: ['./doctor-any.component.css']
})
export class DoctorAnyComponent implements OnInit {

    constructor(private serviceAppointmentType: AppointmentTypeService, private serviceSpecialization: SpecializationService) {
    }

    ngOnInit(): void {
        this.alert = document.getElementById("alert")
        this.alert.style.visibility = "hidden"
        this.alertSuccess = document.getElementById("alertSuccess")
        this.alertSuccess.style.visibility = "hidden"

        this.getAllSpecializations()
        // fill appointmentType with empty values
        this.appointmentType = new AppointmentType("", "", "", "", [], 0, false)
    }

    appointmentType: AppointmentType
    message: string
    alert: HTMLElement;
    alertSuccess: HTMLElement;
    specializations: Specialization[]
    newSpecialization = "Unesite novu specijalizaciju"
    selectionPressed = ""

    createNewAppointment() {
        if (this.appointmentType.description == "" || this.appointmentType.descriptionStrong == "" || this.appointmentType.specialization == "" || this.appointmentType.price == 0) {
            this.message = "Sva polja moraju biti popunjena."
            this.alert.style.visibility = "visible"
            return
        }

        if (this.appointmentType.price < 0) {
            this.message = "Price can't be negative!"
            this.alert.style.visibility = "visible"
            return
        }

        if (this.selectionPressed == "" && this.newSpecialization == "Unesite novu specijalizaciju") {
            this.message = "Please choose specialization!"
            this.alert.style.visibility = "visible"
            return
        }

        // if (this.selectionPressed == "" && this.newSpecialization != "Unesite novu specijalizaciju") {
        //     let specialization = new Specialization(this.newSpecialization)
        //     this.serviceSpecialization.create(specialization).subscribe((response) => {
        //     })
        //     this.appointmentType.specialization = this.newSpecialization
        // }

        this.alert.style.visibility = "hidden"

        this.appointmentType.doctors.push(localStorage.getItem("loggedInDoctor"))

        this.serviceAppointmentType.create(this.appointmentType).subscribe((response) => {
        })

        this.alertSuccess.style.visibility = "visible"
        this.message = "Uspesno ste kreirali novi tip pregleda."
    }

    getAllSpecializations() {
        this.serviceSpecialization.readAll().subscribe((specializations: Specialization[]) => {
            this.specializations = specializations
        })
    }

    chooseSelection(spec) {
        this.selectionPressed = spec
    }

    buttonNewSpecialization() {
        this.selectionPressed = "Nova specijalizacija"
        document.getElementById("exitedSpecializations").setAttribute("disabled", "true")
    }

}
