import {Component, OnInit} from '@angular/core';
import {ManagerService} from "../services/manager.service";

@Component({
  selector: 'app-manager-register-doctor',
  templateUrl: './manager-register-doctor.component.html',
  styleUrls: ['./manager-register-doctor.component.css']
})
export class ManagerRegisterDoctorComponent implements OnInit {

  constructor(private managerService: ManagerService) {
  }

  ngOnInit(): void {
  }

  firstname: string;
  lastname: string;
  username: string;
  password: string;
  address: string;
  phone: string;
  mail: string;
  licenceId: string;
  specialization: string;
  branch: string;

  message: string;

  registerDoctor() {
    // TODO = check if patient exist
    this.managerService.registerDoctor(this.firstname, this.lastname, this.username, this.password, this.address, this.phone, this.mail, this.licenceId, this.specialization, this.specialization).subscribe(respObj => {
      if (respObj['message'] == 'ok')
        this.message = "Doctor added."
      else
        this.message = "Error!"
    });
  }
}
