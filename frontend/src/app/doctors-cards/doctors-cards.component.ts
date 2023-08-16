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

  buttonSortPressed = {
    name: false,
    lastname: false,
    specialization: false
  }

  buttonSort(buttonId: string) {
    let button = document.getElementById(buttonId)
    this.buttonSortPressed.name = !this.buttonSortPressed.name
    if (this.buttonSortPressed.name)
      button.classList.add("active")
    else
      button.classList.remove("active")

    switch (buttonId) {
      case "buttonSortName":
        if (this.buttonSortPressed.name)
          this.sortByName()
        break
      case "buttonSortLastname":
        if (this.buttonSortPressed.lastname)
          this.sortByLastname()
        break
      case "buttonSortSpecialization":
        if (this.buttonSortPressed.specialization)
          this.sortBySpecialization()
        break
    }
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

  sortByName() {
    this.doctors.sort((a, b) => {
      if (a.firstname > b.firstname)
        return 1;
      if (a.firstname < b.firstname)
        return -1;
      return 0;
    })
  }

  sortByLastname() {
    this.doctors.sort((a, b) => {
      if (a.lastname > b.lastname)
        return 1;
      if (a.lastname < b.lastname)
        return -1;
      return 0;
    })
  }

  sortBySpecialization() {
    this.doctors.sort((a, b) => {
      if (a.specialization > b.specialization)
        return 1;
      if (a.specialization < b.specialization)
        return -1;
      return 0;
    })
  }

}
