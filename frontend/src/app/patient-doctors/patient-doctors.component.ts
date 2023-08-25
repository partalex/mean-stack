import {Component, OnInit} from '@angular/core';
import {DoctorService} from "../services/doctor.service";
import {Doctor} from "../../model/doctor";

@Component({
    selector: 'app-patient-doctors',
    templateUrl: './patient-doctors.component.html',
    styleUrls: ['./patient-doctors.component.css']
})
export class PatientDoctorsComponent implements OnInit {

    constructor(private serviceDoctor: DoctorService) {
    }

    ngOnInit(): void {
        this.searchedFirstname = "";
        this.searchedLastname = "";
        this.searchedSpecialization = "";
        this.search()
    }


    searchedFirstname: string
    searchedLastname: string
    searchedSpecialization: string
    doctors: Doctor[];


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
        this.serviceDoctor.search(data).subscribe((doctors: Doctor[]) => {
            this.doctors = doctors
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

    protected readonly Doctor = Doctor;
}

