import {Injectable} from '@angular/core';
import {Patient} from "../../model/patient";
import {PatientService} from "./patient.service";

@Injectable({
    providedIn: 'root'
})

export class CheckService {

    constructor(private servicePatient: PatientService) {
    }

    // TODO - check if password is valid
    checkPasswordFormat(password: string) {
        // let regexp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\"},d)(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&]{8,14}$")
        // if (regexp.test(password) == false) {
        //     return "Lozinka nije u odgovarajucem formatu."
        // }
        return ""
    }

    checkPasswordConfirmed(password: string, passwordConfirm: string) {
        if (password != passwordConfirm) {
            return "Povrdite lozinku."
        }
        return ""
    }

    checkRegistrationPatient(patient: Patient, passwordConfirm: string): string {
        let returnMessage = ""

        // check all fields
        if (patient.firstname == "" || patient.lastname == "" || patient.username == "" || patient.password == "" || passwordConfirm == "" || patient.address == "" || patient.phone == "" || patient.mail == "") {
            return "Sva polja moraju biti uneta."
        }

        let exist = false

        // check is username unique
        this.servicePatient.readByUsername(patient.username).subscribe((patient: Patient) => {
            if (patient != null)
                exist = true
        })
        if (exist)
            return "Pacijent sa ovim korisnickim imenom vec postoji."

        // check is mail unique
        this.servicePatient.readByMail(patient.mail).subscribe((patient: Patient) => {
            if (patient != null)
                exist = true
        })
        if (exist)
            return "Pacijent sa ovim korisničkim imenom već postoji."

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


        returnMessage = this.checkPasswordFormat(patient.password);
        if (returnMessage != "")
            return returnMessage

        return ""
    }
}
