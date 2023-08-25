import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Doctor} from "../../model/doctor";
import {DoctorService} from "../services/doctor.service";

@Component({
  selector: 'app-patient-doctor-profile',
  templateUrl: './patient-doctor-profile.component.html',
  styleUrls: ['./patient-doctor-profile.component.css']
})
export class PatientDoctorProfileComponent implements OnInit {

  constructor(private serviceRouter: ActivatedRoute, private serviceDoctor: DoctorService) {
  }

  ngOnInit(): void {
    this.doctor = new Doctor("", "", "", "", "", false, "", "", "", "", "")
    this.serviceRouter.params.subscribe(params => {
      let id = params['id'];
      this.serviceDoctor.read(id).subscribe((doctor: Doctor) => {
        this.doctor = doctor
      })
    });
  }

  doctor: Doctor
}
