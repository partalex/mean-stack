import {Injectable} from '@angular/core';
import {Patient} from "../../model/patient";
import {PatientService} from "./patient.service";

@Injectable({
    providedIn: 'root'
})

export class CheckService {

    constructor(private servicePatient: PatientService) {
    }

    checkPasswordFormat(password: string) {
        let regexp = new RegExp("^(?!.*(.)(?:.*\\1){1})(?=[A-Za-z])(?=.*\\d)(?=.*[@#$%^&+=]).{8,14}$")
        if (regexp.test(password) == false) {
            return "Lozinka nije u odgovarajucem formatu."
        }
        return ""
    }

    checkPasswordConfirmed(password: string, passwordConfirm: string) {
        if (password != passwordConfirm) {
            return "Povrdite lozinku."
        }
        return ""
    }

    // async checkIsMailUnique(mail: string): Promise<string> {
    //     let resp = this.servicePatient.readByMail(mail)
    //     if (resp != null)
    //         return "Pacijent sa ovim korisničkim imenom već postoji."
    //     return ""
    // }

    // async checkIsUsernameUnique(username: string): Promise<string> {
    //     let resp =  this.servicePatient.readByUsername(username)
    //     if (resp != null)
    //         return "Pacijent sa ovim korisničkim imenom već postoji."
    //     return ""
    // }

    checkRegistrationPatient(patient: Patient, passwordConfirm: string): string {
        let returnMessage = this.checkPasswordFormat(patient.password);

        if (returnMessage != "")
            return returnMessage

        // let exist = false
        //
        // this.checkIsUsernameUnique(patient.username).then((value) => {
        //     if (value != "") {
        //         exist = true
        //         returnMessage = value
        //     }
        //
        // })
        // if (exist)
        //     return returnMessage
        //
        // this.checkIsMailUnique(patient.mail).then((value) => {
        //     if (value != "") {
        //         exist = true
        //         returnMessage = value
        //     }
        // })
        // if (exist)
        //     return returnMessage


        if (patient.firstname == "" || patient.lastname == "" || patient.username == "" || patient.password == "" || passwordConfirm == "" || patient.address == "" || patient.phone == "" || patient.mail == "") {
            return "Sva polja moraju biti uneta."
        }

        // check is password confirmed
        returnMessage = this.checkPasswordConfirmed(patient.password, passwordConfirm)
        if (returnMessage != "")
            return returnMessage

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
}
