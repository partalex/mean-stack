import {Component, OnInit} from '@angular/core';
import {Appointment} from "../../model/appointment";
import {AppointmentService} from "../services/appointment.service";

@Component({
  selector: 'app-patient-schedule-appointment',
  templateUrl: './patient-schedule-appointment.component.html',
  styleUrls: ['./patient-schedule-appointment.component.css']
})
export class PatientScheduleAppointmentComponent implements OnInit {

  constructor(private serviceAppointment: AppointmentService) {
    this.getDoctorsAppointments(localStorage.getItem("loggedInDoctor"))
  }

  ngOnInit(): void {
  }

  scheduleAppointment() {
  }

  appointments: Appointment[]

  getDoctorsAppointments(doctorId) {
    this.serviceAppointment.readByDoctorId(doctorId).subscribe((appointments: Appointment[]) => {
      this.appointments = appointments
    })
  }

}
