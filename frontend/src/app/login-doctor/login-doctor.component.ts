import {Component, OnInit} from '@angular/core';
import {Doctor} from "../../model/doctor";
import {Router} from "@angular/router";
import {HomePageService} from "../home-page.service";

@Component({
  selector: 'app-login-doctor',
  templateUrl: './login-doctor.component.html',
  styleUrls: ['./login-doctor.component.css']
})
export class LoginDoctorComponent implements OnInit {

  constructor(private service: HomePageService, private router: Router) {
  }

  ngOnInit(): void {
  }

  username: string;
  password: string;
  message: string;

  loginDoctor() {
    this.service.loginDoctor(this.username, this.password).subscribe((patient: Doctor) => {
      if (patient != null)
        this.router.navigate(['doctor']); // TODO
      this.message = "Error"
      return;
    })
  }
}
