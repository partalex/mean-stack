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
        this.readByUsername(localStorage.getItem("loggedInPatient"))
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
            let inputfirstname = document.getElementById("inputFirstname")
            inputfirstname.removeAttribute("disabled")
            let inputLastname = document.getElementById("inputLastname")
            inputLastname.removeAttribute("disabled")
            let inputUsername = document.getElementById("inputUsername")
            inputUsername.removeAttribute("disabled")
            let inputAddress = document.getElementById("inputAddress")
            inputAddress.removeAttribute("disabled")
            let inputPhone = document.getElementById("inputPhone")
            inputPhone.removeAttribute("disabled")
            let inputMail = document.getElementById("inputMail")
            inputMail.removeAttribute("disabled")
            let formFile = document.getElementById("formFile")
            formFile.removeAttribute("disabled")
        } else {
            let inputfirstname = document.getElementById("inputFirstname")
            inputfirstname.setAttribute("disabled", "true")
            let inputLastname = document.getElementById("inputLastname")
            inputLastname.setAttribute("disabled", "true")
            let inputUsername = document.getElementById("inputUsername")
            inputUsername.setAttribute("disabled", "true")
            let inputAddress = document.getElementById("inputAddress")
            inputAddress.setAttribute("disabled", "true")
            let inputPhone = document.getElementById("inputPhone")
            inputPhone.setAttribute("disabled", "true")
            let inputMail = document.getElementById("inputMail")
            inputMail.setAttribute("disabled", "true")
            let formFile = document.getElementById("formFile")
            formFile.setAttribute("disabled", "true")
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

    message: string;
    changing = false;
    alert: HTMLElement;
    alertSuccess: HTMLElement

    readByUsername(username) {
        this.service.readByUsername(username).subscribe((patient: Patient) => {
            this.patient = patient
        })
    }

    update() {
        this.service.update(this.patient).subscribe((patient: Patient) => {
            this.patient = patient
            this.alertSuccess.style.visibility = "visible"
            this.message = "Password changed successfully"
        })
    }
}
