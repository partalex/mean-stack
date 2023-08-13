import {Component, OnInit} from '@angular/core';
import {PatientService} from "../services/patient.service";
import {HttpClient} from "@angular/common/http";
import {Patient} from "../../model/patient";
import {CheckService} from "../services/check.service";
import {ServiceSession} from "../services/session.service";

@Component({
    selector: 'app-patient-profile',
    templateUrl: './patient-profile.component.html',
    styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {

    constructor(private servicePatient: PatientService, private serviceCheck: CheckService, private http: HttpClient, private serviceSession: ServiceSession) {
        this.readById(localStorage.getItem("loggedInPatient"))
    }

    ngOnInit(): void {
        this.alert = document.getElementById("alert")
        this.alert.style.visibility = "hidden"
        this.alertSuccess = document.getElementById("alertSuccess")
        this.alertSuccess.style.visibility = "hidden"
    }

    flipDisabled() {
        this.changing = !this.changing
        if (this.changing) {
            document.getElementById("fieldset").removeAttribute("disabled")
            document.getElementById("saveChanges").removeAttribute("disabled")
        } else {
            document.getElementById("fieldset").setAttribute("disabled", "true")
            document.getElementById("saveChanges").setAttribute("disabled", "true")
        }
    }

    flipDisabledPassword() {
        this.changingPassword = !this.changingPassword
        if (this.changingPassword) {
            document.getElementById("fieldsetPassword").removeAttribute("disabled")
            document.getElementById("saveNewPassword").removeAttribute("disabled")
        } else {
            document.getElementById("fieldsetPassword").setAttribute("disabled", "true")
            document.getElementById("saveNewPassword").setAttribute("disabled", "true")
        }
    }

    buttonDisabledText() {
        if (!this.changing) {
            return "Izmeni informacije"
        }
        return "Ne menjaj informacije"
    }

    saveChanges() {
        if (this.patient.username == "") {
            this.alert.style.visibility = "visible"
            this.message = "Username cannot be empty.";
            return
        }
        this.message = "Uspešno ste izmenili informacije."
        this.update()
    }

    onSelectFile(event) {
        if (event.target.files) {
            let reader = new FileReader()
            reader.readAsDataURL(event.target.files[0])
            reader.onload = (event: any) => {
                this.patient.image = event.target.result
            }
        }
    }

    patient: Patient = new Patient()
    checkPassword = ""
    newPassword = ""
    checkNewPassword = ""
    message: string;
    changing = false;
    changingPassword = false;
    alert: HTMLElement;
    alertSuccess: HTMLElement

    readById(id) {
        this.servicePatient.read(id).subscribe((patient: Patient) => {
            this.patient = patient
        })
    }

    saveNewPassword() {

        // check if new password is empty
        if (this.newPassword == "" || this.checkNewPassword == "" || this.patient.password == "") {
            this.message = "Polja ne smeju biti prazna."
            this.alert.style.visibility = "visible"
            return
        }

        // check if old password is correct
        if (this.checkPassword != this.patient.password) {
            this.message = "Pogrešna stara lozinka."
            this.alert.style.visibility = "visible"
            return
        }

        // check if password confirmed
        this.message = this.serviceCheck.checkPasswordConfirmed(this.newPassword, this.checkNewPassword);
        if (this.message != "") {
            this.alert.style.visibility = "visible"
            return
        }

        // TODO - check if password is valid
        this.message = this.serviceCheck.checkPasswordFormat(this.newPassword);
        if (this.message != "") {
            this.alert.style.visibility = "visible"
            return
        }

        // set new password
        this.patient.password = this.newPassword
        this.update()
        this.servicePatient.logOutPatient()
    }

    buttonDisabledPasswordText() {
        if (!this.changingPassword)
            return "Promeni lozinku"
        return "Ne menjaj lozinku"
    }

    update() {
        this.servicePatient.update(this.patient).subscribe((patient: Patient) => {
            this.patient = patient
        })
    }
}
