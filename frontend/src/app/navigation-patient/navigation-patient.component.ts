import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PatientService} from "../services/patient.service";

@Component({
  selector: 'app-navigation-patient',
  templateUrl: './navigation-patient.component.html',
  styleUrls: ['./navigation-patient.component.css']
})
export class NavigationPatientComponent implements OnInit {

  constructor(public router: Router, private servicePatient: PatientService) {
  }

  ngOnInit(): void {
    let loggedInPatient = localStorage.getItem("loggedInPatient")
    if (loggedInPatient == null)
      this.router.navigate(["/loginPatient"])
  }

  logOut() {
    this.servicePatient.logOutPatient()
  }

}
