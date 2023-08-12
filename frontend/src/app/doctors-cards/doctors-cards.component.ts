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

    getAllDoctors() {
        this.serviceDoctor.readAll().subscribe((doctors: Doctor[]) => {
            this.doctors = doctors
        })
    }
}
