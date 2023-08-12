import {Component, OnInit} from '@angular/core';
import {PatientService} from "../services/patient.service";
import {HttpClient} from "@angular/common/http";
import {Patient} from "../../model/patient";

@Component({
    selector: 'app-patient-profile',
    templateUrl: './patient-profile.component.html',
    styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {

    constructor(private service: PatientService, private http: HttpClient) {
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
        this.service.read(id).subscribe((patient: Patient) => {
            this.patient = patient
        })
    }

    saveNewPassword() {
        // TODO - check if password is valid
        this.patient.password = this.newPassword
        this.message = "Uspešno ste izmenili lozinku."
        this.update()
    }

    buttonDisabledPasswordText() {
        if (!this.changingPassword)
            return "Promeni lozinku"
        return "Ne menjaj lozinku"
    }


    update() {
        this.service.update(this.patient).subscribe((patient: Patient) => {
            this.patient = patient
            this.alertSuccess.style.visibility = "visible"
        })
    }
}
