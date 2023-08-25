import {Component, OnInit} from '@angular/core';
import {PatientService} from "../services/patient.service";
import {Patient} from "../../model/patient";
import {CheckService} from "../services/check.service";

@Component({
    selector: 'app-patient-profile',
    templateUrl: './patient-profile.component.html',
    styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {

    constructor(private servicePatient: PatientService, private serviceCheck: CheckService) {
    }

    ngOnInit(): void {
        this.alert = document.getElementById("alert")
        this.alert.style.visibility = "hidden"
        this.alertSuccess = document.getElementById("alertSuccess")
        this.alertSuccess.style.visibility = "hidden"

        this.patient = new Patient("", "", "", "", false, "", "", "")
        this.getPatient(localStorage.getItem("loggedInPatient"))
    }

    onSelectFile(event) {
        if (event.target.files) {
            let reader = new FileReader()
            reader.readAsDataURL(event.target.files[0])
            reader.onload = (event: any) => {
                this.newImage = event.target.result
                let img = new Image()
                img.src = this.newImage
                img.onload = () => {
                    if (img.height > 300 || img.width > 300) {
                        this.message = "Slika mora biti manja od 300x300px."
                        this.alert.style.visibility = "visible"
                        return

                    } else if (img.height < 100 || img.width < 100) {
                        this.message = "Slika mora biti veća od 100x100px."
                        this.alert.style.visibility = "visible"
                        return
                    }
                    this.patient.image = this.newImage
                }
            }
        }
    }

    patient: Patient
    checkPassword: string
    newPassword: string
    checkNewPassword: string
    newImage: string
    message: string;
    alert: HTMLElement;
    alertSuccess: HTMLElement

    getPatient(patientId) {
        this.servicePatient.read(patientId).subscribe((patient: Patient) => {
            this.patient = patient
        })
    }

    updatePassword() {

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

        this.message = this.serviceCheck.checkPasswordFormat(this.newPassword);
        if (this.message != "") {
            this.alert.style.visibility = "visible"
            return
        }

        // set new password
        this.patient.password = this.newPassword
        this.updateInfo()
        this.servicePatient.logOutPatient()
    }

    updateInfo() {

        this.message = this.serviceCheck.checkPatientInfo(this.patient)
        if (this.message != "") {
            this.alert.style.visibility = "visible"
            return
        }

        this.servicePatient.update(this.patient).subscribe(() => {
            this.ngOnInit()
            this.alertSuccess.style.visibility = "visible"
            this.message = "Uspešno ste izmenili informacije."
        })
    }
}
