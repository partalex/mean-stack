import {Component, OnInit} from '@angular/core';
import {AppointmentService} from "../services/appointment.service";
import {Appointment} from "../../model/appointment";
import {AppointmentTypeService} from "../services/appointmentType.service";
import {AppointmentType} from "../../model/appointmentType";

@Component({
  selector: 'app-doctor-views',
  templateUrl: './doctor-views.component.html',
  styleUrls: ['./doctor-views.component.css']
})
export class DoctorViewsComponent implements OnInit {

  constructor(private serviceAppointment: AppointmentService, private serviceAppointmentType: AppointmentTypeService) {
  }

  doctorId: string

  ngOnInit(): void {
    this.alert = document.getElementById("alert");
    this.alert.style.visibility = "hidden"
    this.message = ""
    this.doctorId = localStorage.getItem("loggedInDoctor")
    this.readAllByDoctorId(this.doctorId)
    this.readRegisteredAppointments(this.doctorId)
  }

  cancelAppointment(appointment) {

    if (appointment.reasonForCanceling == "") {
      this.message = "Niste uneli razlog otkazivanja."
      this.alert.style.visibility = "visible"
      return
    }

    appointment.canceled = true

    this.serviceAppointment.update(appointment).subscribe((newAppointment: Appointment) => {
      console.log(newAppointment)
      this.ngOnInit()
    })
  }


  appointments: Appointment[]
  registeredAppointmentTypes: AppointmentType[]
  alert: HTMLElement;
  message: string;


  readRegisteredAppointments(doctorId) {
    this.serviceAppointmentType.readRegisteredDoctor(doctorId).subscribe((registeredAppointments: AppointmentType[]) => {
      this.registeredAppointmentTypes = registeredAppointments
    })
  }

  readAllByDoctorId(doctorId) {
    this.serviceAppointment.readByDoctorId(doctorId).subscribe((appointments: Appointment[]) => {
      this.appointments = appointments
    })
  }
}
