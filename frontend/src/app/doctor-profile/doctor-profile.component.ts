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
    }

    ngOnInit(): void {
        this.alert = document.getElementById("alert")
        this.alert.style.visibility = "hidden"
        this.alertSuccess = document.getElementById("alertSuccess")
        this.alertSuccess.style.visibility = "hidden"
        this.doctor = new Doctor("", "", "", "", "", false, "", "", "", "", "")
        this.getDoctor(localStorage.getItem("loggedInDoctor"))
        this.getAllSpecializations()
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
                    this.doctor.image = this.newImage
                }
            }
        }
    }

    doctor: Doctor
    checkPassword: string
    newPassword: string
    newImage: string
    checkNewPassword: string
    dropdownSelected: string
    message: string;
    alert: HTMLElement;
    alertSuccess: HTMLElement
    specializations: Specialization[]

    getDoctor(doctorId) {
        this.serviceDoctor.read(doctorId).subscribe((doctor: Doctor) => {
            this.doctor = doctor
            this.dropdownSelected = doctor.specialization
        })
    }

    updatePassword() {

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

        // check if password format is correct
        this.message = this.serviceCheck.checkPasswordFormat(this.newPassword);
        if (this.message != "") {
            this.alert.style.visibility = "visible"
            return
        }

        // set new password
        this.doctor.password = this.newPassword
        this.updateInfo()
        this.serviceDoctor.logOutDoctor()
    }

    updateInfo() {
        this.message = this.serviceCheck.checkDoctorInfo(this.doctor)
        if (this.message != "") {
            this.alert.style.visibility = "visible"
            return
        }

        this.serviceDoctor.update(this.doctor).subscribe(() => {
            this.ngOnInit()
            this.alertSuccess.style.visibility = "visible"
            this.message = "Uspešno ste izmenili informacije."
        })
    }
}
