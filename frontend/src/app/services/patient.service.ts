import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient, private router: Router) {
  }

  logOut() {
    localStorage.clear()
    this.router.navigate([''])
  }
}
