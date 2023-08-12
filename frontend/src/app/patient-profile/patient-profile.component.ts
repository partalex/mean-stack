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

    removeDisabled() {
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
