import {Component, OnInit} from '@angular/core';
import {ManagerService} from "../manager.service";

@Component({
  selector: 'app-register-doctor',
  templateUrl: './register-doctor.component.html',
  styleUrls: ['./register-doctor.component.css']
})
export class RegisterDoctorComponent implements OnInit {

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

  register() {
    this.managerService.register(this.firstname, this.lastname, this.username, this.password, this.address, this.phone, this.mail, this.licenceId, this.specialization, this.specialization).subscribe(respObj => {
      if (respObj['message'] == 'ok')
        this.message = 'User added'
      else
        this.message = 'Error'
    });
  }
}
