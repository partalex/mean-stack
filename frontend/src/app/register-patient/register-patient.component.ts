import {Component, OnInit} from '@angular/core';
import {UnregisteredService} from "../services/unregistered.service";
import {Patient} from "../../model/patient";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-patient',
  templateUrl: './register-patient.component.html',
  styleUrls: ['./register-patient.component.css']
})
export class RegisterPatientComponent implements OnInit {
  constructor(private service: UnregisteredService, private router: Router) {
  }

  ngOnInit(): void {
    this.alert = document.getElementById("alert");
    this.alert.style.visibility = "hidden"
  }

  firstname = "";
  lastname = "";
  username = "";
  password = "";
  passwordConfirm = "";
  address = "";
  phone = "";
  mail = "";

  message: string;
  alert: HTMLElement;

  registerPatient() {

    if (this.firstname == "" || this.lastname == "" || this.username == "" || this.password == "" || this.passwordConfirm == "" || this.address == "" || this.phone == "" || this.mail == "") {
      this.message = "Sva polja moraju biti uneta."
      this.alert.style.visibility = "visible"
      return
    }

    this.service.checkPatientUsername(this.username).subscribe((patient: Patient) => {
      if (patient != null) {
        console.log(patient)
        this.message = "Paciejent sa ovim korisnickim imenom vec postoji."
        this.alert.style.visibility = "visible"
        return
      }
    })

    this.service.checkPatientMail(this.mail).subscribe((patient: Patient) => {
      if (patient != null) {
        console.log(patient)
        this.message = "Nalog sa ovim mejlom vec postoji."
        this.alert.style.visibility = "visible"
        return
      }
    })

    if (this.password != this.passwordConfirm) {
      this.message = "Povrdite lozinku."
      this.alert.style.visibility = "visible"
      return

    }


    let regexpPhone = new RegExp("^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$")
    if (regexpPhone.test(this.phone) == false) {
      this.message = "Konakt telefon nije u odgovarajucem formatu."
      this.alert.style.visibility = "visible"
      return
    }

    let regexpMail = new RegExp("(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])")
    if (regexpMail.test(this.mail) == false) {
      this.message = "Mejl nije u odgovarajucem formatu."
      this.alert.style.visibility = "visible"
      return
    }

    let regexpUsername = new RegExp("^.{8,}$")
    if (regexpUsername.test(this.username) == false) {
      this.message = "Korisnicko ima mora imati barem 8 karaktera."
      this.alert.style.visibility = "visible"
      return
    }

    // fixme - check for password
    // let regexp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\"},d)(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&]{8,14}$")
    // if (regexp.test(this.username) == false) {
    //   this.message = "Lozinka nije u odgovarajucem formatu."
    //   this.alert.style.visibility = "visible"
    //   return
    // }

    this.service.registerPatient(this.firstname, this.lastname, this.username, this.password, this.address, this.phone, this.mail).subscribe(respObj => {
      if (respObj['message'] == 'ok')
        this.router.navigate(["patient"])
      else {
        this.message = "Error!"
        this.alert.style.visibility = "visible"
      }
    });
  }
}

