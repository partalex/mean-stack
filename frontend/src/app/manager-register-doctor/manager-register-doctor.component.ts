import {Component, OnInit} from '@angular/core';
import {ManagerService} from "../services/manager.service";
import {Doctor} from "../../model/doctor";

@Component({
  selector: 'app-manager-register-doctor',
  templateUrl: './manager-register-doctor.component.html',
  styleUrls: ['./manager-register-doctor.component.css']
})
export class ManagerRegisterDoctorComponent implements OnInit {

  constructor(private service: ManagerService) {
  }

  ngOnInit(): void {
    this.alert = document.getElementById("alert");
    this.alertSuccess = document.getElementById("alertSuccess");
    this.alert.style.visibility = "hidden"
    this.alertSuccess.style.visibility = "hidden"
  }

  firstname = ""
  lastname = ""
  username = ""
  password = ""
  passwordConfirm = ""
  address = ""
  phone = ""
  mail = ""
  licenceId = ""
  specialization = ""
  medicineBranch = ""

  image = "./assets/default-user/default-user.jpg"
  message = ""
  alert: HTMLElement
  alertSuccess: HTMLElement
  exist = false

  onSelectFile(event) {
    if (event.target.files) {
      let reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event: any) => {
        this.image = event.target.result
      }
    }
  }


  registerDoctor() {
    // fixme - uncomment this
    if (this.firstname == "" || this.lastname == "" || this.username == "" || this.password == "" || this.passwordConfirm == "" || this.address == "" || this.phone == "" || this.mail == "" || this.licenceId == "" || this.specialization == "" || this.medicineBranch == "") {
      this.message = "Sva polja moraju biti uneta."
      this.alert.style.visibility = "visible"
      return
    }

    // check if doctor with this username already exists
    {
      this.service.checkDoctorUsername(this.username).subscribe((doctor: Doctor) => {

        if (doctor != null)
          this.exist = true
      })
      if (this.exist) {
        this.message = "Pacijent sa ovim korisnickim imenom vec postoji."
        this.alert.style.visibility = "visible"
        this.exist = false
        console.log("postoji")
        return
      }
    }

    // check if doctor with this mail already exists
    this.service.checkDoctorMail(this.mail).subscribe((doctor: Doctor) => {
      if (doctor != null) {
        this.exist = true
      }
    })
    if (this.exist) {
      this.message = "Pacijent sa ovim mejlov vec postoji."
      this.alert.style.visibility = "visible"
      this.exist = false
      return
    }

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

    this.service.registerDoctor(this.firstname, this.lastname, this.username, this.password, this.address, this.phone, this.mail, this.licenceId, this.specialization, this.medicineBranch).subscribe(respObj => {
      if (respObj['message'] == 'ok') {
        this.message = "Doctor added."
        this.alert.style.visibility = "hidden"
        this.alertSuccess.style.visibility = "visible"
      } else {
        this.message = "Greska u konekciji sa bazom!"
        this.alert.style.visibility = "visible"
      }
    });
  }
}
