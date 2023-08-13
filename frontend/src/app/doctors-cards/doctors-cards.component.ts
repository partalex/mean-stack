import {Component, OnInit} from '@angular/core';
import {Doctor} from "../../model/doctor";
import {DoctorService} from "../services/doctor.service";

@Component({
    selector: 'app-doctors-cards',
    templateUrl: './doctors-cards.component.html',
    styleUrls: ['./doctors-cards.component.css']
})
export class DoctorsCardsComponent implements OnInit {

    constructor(private serviceDoctor: DoctorService) {
        this.getAllDoctors()
    }

    ngOnInit(): void {
    }

    doctors: Doctor[]
    searchedFirstname = "";
    searchedLastname = "";
    searchedSpecialization = "";
    searchResult: Doctor[];

    getAllDoctors() {
        this.serviceDoctor.readAll().subscribe((doctors: Doctor[]) => {
            this.doctors = doctors
        })
    }

    search() {
        let data = {
            firstname: this.searchedFirstname,
            lastname: this.searchedLastname,
            specialization: this.searchedSpecialization
        }
        this.serviceDoctor.search({data}).subscribe((doctors: Doctor[]) => {
            this.searchResult = doctors
            console.log(this.searchResult)
        });
    }
}
