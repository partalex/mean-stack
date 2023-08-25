import {Injectable} from '@angular/core';
import {Patient} from "../../model/patient";
import {Doctor} from "../../model/doctor";

@Injectable({
  providedIn: 'root'
})

export class CheckService {

  constructor() {
  }

  checkPasswordFormat(password: string) {
    let regexp = new RegExp("^(?!.*(.)(?:.*\\1){1})(?=[A-Za-z])(?=.*\\d)(?=.*[@#$%^&+=]).{8,14}$")
    if (regexp.test(password) == false) {
      return "Lozinka nije u odgovarajućem formatu."
    }
    return ""
  }

  checkPasswordConfirmed(password: string, passwordConfirm: string) {
    if (password != passwordConfirm) {
      return "Povrdite lozinku."
    }
    return ""
  }

  checkPatientInfo(patient: Patient): string {
    let returnMessage = this.checkPasswordFormat(patient.password);

    if (returnMessage != "")
      return returnMessage

    if (patient.firstname == "" || patient.lastname == "" || patient.username == "" || patient.password == "" || patient.address == "" || patient.phone == "" || patient.mail == "") {
      return "Sva polja moraju biti uneta."
    }

    // check is phone number valid
    let regexpPhone = new RegExp("^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$")
    if (regexpPhone.test(patient.phone) == false)
      return "Konakt telefon nije u odgovarajućem formatu."

    // check is mail valid
    let regexpMail = new RegExp("(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])")
    if (regexpMail.test(patient.mail) == false)
      return "Mejl nije u odgovarajućem formatu."

    // check is username valid
    let regexpUsername = new RegExp("^.{8,}$")
    if (regexpUsername.test(patient.username) == false)
      return "Korisničko ima mora imati barem 8 karaktera."


    return ""
  }

  checkDoctorInfo(doctor: Doctor): string {
    let returnMessage = this.checkPasswordFormat(doctor.password);

    if (returnMessage != "")
      return returnMessage

    if (doctor.firstname == "" || doctor.lastname == "" || doctor.username == "" || doctor.password == "" || doctor.address == "" || doctor.phone == "" || doctor.mail == "" || doctor.licenceId == "" || doctor.specialization == "" || doctor.medicineBranch == "") {
      return "Sva polja moraju biti uneta."
    }

    // check is phone number valid
    let regexpPhone = new RegExp("^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$")
    if (regexpPhone.test(doctor.phone) == false)
      return "Konakt telefon nije u odgovarajućem formatu."

    // check is mail valid
    let regexpMail = new RegExp("(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])")
    if (regexpMail.test(doctor.mail) == false)
      return "Mejl nije u odgovarajućem formatu."

    // check is username valid
    let regexpUsername = new RegExp("^.{8,}$")
    if (regexpUsername.test(doctor.username) == false)
      return "Korisničko ima mora imati barem 8 karaktera."


    return ""
  }
}
