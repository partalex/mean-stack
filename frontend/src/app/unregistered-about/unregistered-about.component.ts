import {Component, OnInit} from '@angular/core';
import {AppointmentType} from "../../model/appointmentType";
import {AppointmentTypeService} from "../services/appointmentType.service";
import {InitializationService} from "../services/initialization.service";

@Component({
  selector: 'app-unregistered-about',
  templateUrl: './unregistered-about.component.html',
  styleUrls: ['./unregistered-about.component.css']
})
export class UnregisteredAboutComponent implements OnInit {

  constructor(
    private serviceAppointmentType: AppointmentTypeService,
    private initializationService: InitializationService,
  ) {
  }


  initialize() {
    this.initializationService.init()
  }

  ngOnInit(): void {
    this.getAllAppointmentTypes()
  }

  appointmentTypes: AppointmentType[];

  getAllAppointmentTypes() {
    this.serviceAppointmentType.readAll().subscribe((appointmentTypes: AppointmentType[]) => {
      this.appointmentTypes = appointmentTypes;
    })
  }
}
