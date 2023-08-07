import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  uri = 'http://127.0.0.1:4000/doctor'

  constructor(private http: HttpClient, private router: Router) {
  }

  logOut() {
    localStorage.removeItem("loggedInDoctor")
    this.router.navigate([''])
  }
}
