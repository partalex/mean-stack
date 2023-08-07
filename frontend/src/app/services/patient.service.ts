import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient, private router: Router) {
  }

  uri = 'http://127.0.0.1:4000/patient'


  logOut() {
    localStorage.removeItem("loggedInPatient")
    this.router.navigate([''])
  }
}
