import {Component, OnInit} from '@angular/core';
import {CheckService} from "../services/check.service";
import {Doctor} from "../../model/doctor";
import {DoctorService} from "../services/doctor.service";
import {SpecializationService} from "../services/specialization.service";
import {Specialization} from "../../model/specialization";

@Component({
    selector: 'app-doctor-profile',
    templateUrl: './doctor-profile.component.html',
    styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {

    constructor(private serviceDoctor: DoctorService, private serviceSpecialization: SpecializationService, private serviceCheck: CheckService) {
        this.readById(localStorage.getItem("loggedInDoctor"))
        this.getAllSpecializations()

    }

    ngOnInit(): void {
        this.alert = document.getElementById("alert")
        this.alert.style.visibility = "hidden"
        this.alertSuccess = document.getElementById("alertSuccess")
        this.alertSuccess.style.visibility = "hidden"
    }

    dropDownClicked(specialization) {
        this.dropdownSelected = specialization
        this.doctor.specialization = specialization
    }


    getAllSpecializations() {
        this.serviceSpecialization.readAll().subscribe((specializations: Specialization[]) => {
            this.specializations = specializations
        })
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
        if (this.doctor.username == "") {
            this.alert.style.visibility = "visible"
            this.message = "Username cannot be empty.";
            return
        }
        this.alertSuccess.style.visibility = "visible"
        this.message = "Uspešno ste izmenili informacije."
        console.log("this.doctor")
        this.update()
    }

    onSelectFile(event) {
        if (event.target.files) {
            let reader = new FileReader()
            reader.readAsDataURL(event.target.files[0])
            reader.onload = (event: any) => {
                this.doctor.image = event.target.result
            }
        }
    }

    doctor: Doctor = new Doctor("", "", "", "", "", false, "", "", "", "", "", "")
    checkPassword = ""
    newPassword = ""
    checkNewPassword = ""
    dropdownSelected = ""
    message: string;
    changing = false;
    changingPassword = false;
    alert: HTMLElement;
    alertSuccess: HTMLElement
    specializations: Specialization[]

    readById(id) {
        this.serviceDoctor.read(id).subscribe((doctor: Doctor) => {
            this.doctor = doctor
            this.dropdownSelected = doctor.specialization
        })
    }

    saveNewPassword() {
        // check if new password is empty
        if (this.newPassword == "" || this.checkNewPassword == "" || this.doctor.password == "") {
            this.message = "Polja ne smeju biti prazna."
            this.alert.style.visibility = "visible"
            return
        }

        // check if old password is correct
        if (this.checkPassword != this.doctor.password) {
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
        this.doctor.password = this.newPassword
        this.update()
        this.serviceDoctor.logOutDoctor()
    }

    buttonDisabledPasswordText() {
        if (!this.changingPassword)
            return "Promeni lozinku"
        return "Ne menjaj lozinku"
    }

    update() {
        this.serviceDoctor.update(this.doctor).subscribe((doctor: Doctor) => {
            this.doctor = doctor
        })
    }

    protected readonly console = console;
}
