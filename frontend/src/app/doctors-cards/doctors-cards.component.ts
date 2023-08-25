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
    }

    ngOnInit(): void {
        this.getAllDoctors()
        this.searchedFirstname = "";
        this.searchedLastname = "";
        this.searchedSpecialization = "";
    }

    doctors: Doctor[]
    searchedFirstname: string
    searchedLastname: string
    searchedSpecialization: string
    searchResult: Doctor[];

    getAllDoctors() {
        this.serviceDoctor.readAll().subscribe((doctors: Doctor[]) => {
            this.doctors = doctors
        })
    }

    sortPressed = {
        "name": false,
        "lastname": false,
        "specialization": false
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

    buttonSort(dictName: string) {
        for (let key in this.sortPressed) {
            if (key != dictName)
                this.sortPressed[key] = false
        }
        this.sortPressed[dictName] = !this.sortPressed[dictName]

        switch (dictName) {
            case "name":
                this.sortByFirstname(this.sortPressed.name)
                break
            case "lastname":
                this.sortByLastname(this.sortPressed.lastname)
                break
            case "specialization":
                this.sortBySpecialization(this.sortPressed.lastname)
                break
        }
    }

    sortBySpecialization(notDescendingSort: boolean) {
        if (notDescendingSort)
            this.doctors.sort((a, b) => {
                if (a.specialization > b.specialization)
                    return 1;
                if (a.specialization < b.specialization)
                    return -1;
                return 0;
            })
        else
            this.doctors.sort((a, b) => {
                if (a.specialization > b.specialization)
                    return -1;
                if (a.specialization < b.specialization)
                    return 1;
                return 0;
            })
    }

    sortByFirstname(notDescendingSort: boolean) {
        if (notDescendingSort)
            this.doctors.sort((a, b) => {
                if (a.firstname > b.firstname)
                    return 1;
                if (a.firstname < b.firstname)
                    return -1;
                return 0;
            })
        else
            this.doctors.sort((a, b) => {
                if (a.firstname > b.firstname)
                    return -1;
                if (a.firstname < b.firstname)
                    return 1;
                return 0;
            })
    }

    sortByLastname(notDescendingSort: boolean) {
        if (notDescendingSort)
            this.doctors.sort((a, b) => {
                if (a.lastname > b.lastname)
                    return 1;
                if (a.lastname < b.lastname)
                    return -1;
                return 0;
            })
        else
            this.doctors.sort((a, b) => {
                if (a.lastname > b.lastname)
                    return -1;
                if (a.lastname < b.lastname)
                    return 1;
                return 0;
            })
    }

}
