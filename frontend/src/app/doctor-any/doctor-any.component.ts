import {Component, OnInit} from '@angular/core';
import {AppointmentType} from "../../model/appointmentType";
import {AppointmentTypeService} from "../services/appointmentType.service";
import {Specialization} from "../../model/specialization";
import {SpecializationService} from "../services/specialization.service";

@Component({
  selector: 'app-doctor-any',
  templateUrl: './doctor-any.component.html',
  styleUrls: ['./doctor-any.component.css']
})
export class DoctorAnyComponent implements OnInit {

  constructor(private serviceAppointmentType: AppointmentTypeService, private serviceSpecialization: SpecializationService) {
  }

  ngOnInit(): void {
    this.alert = document.getElementById("alert")
    this.alert.style.visibility = "hidden"
    this.alertSuccess = document.getElementById("alertSuccess")
    this.alertSuccess.style.visibility = "hidden"

    this.getAllSpecializations()
    this.getAllAppointmentTypes()
    this.appointmentType = new AppointmentType("", "", "", "", [], 0, false)
  }

  appointmentType: AppointmentType
  appointmentTypes: AppointmentType[]
  message: string
  alert: HTMLElement;
  alertSuccess: HTMLElement;
  specializations: Specialization[]
  selectionSelected = ""

  createNewAppointment() {
    console.log(this.appointmentType)
    if (this.appointmentType.description == "" || this.appointmentType.descriptionStrong == "" || this.appointmentType.specialization == "" || this.appointmentType.price == 0) {
      this.message = "Sva polja moraju biti popunjena."
      this.alert.style.visibility = "visible"
      return
    }

    if (this.appointmentType.price < 0) {
      this.message = "Price can't be negative!"
      this.alert.style.visibility = "visible"
      return
    }

    this.alert.style.visibility = "hidden"

    this.serviceAppointmentType.create(this.appointmentType).subscribe((response) => {
      this.ngOnInit()
    })

  }

  getAllSpecializations() {
    this.serviceSpecialization.readAll().subscribe((specializations: Specialization[]) => {
      this.specializations = specializations
    })
  }

  chooseSelection(spec) {
    this.appointmentType.specialization = spec
  }

  getAllAppointmentTypes() {
    this.serviceAppointmentType.readAll().subscribe((appointmentTypes: AppointmentType[]) => {
      this.appointmentTypes = appointmentTypes
    })
  }

}
