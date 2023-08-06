import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterDoctorComponent} from "./register-doctor/register-doctor.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {AboutComponent} from "./about/about.component";
import {DoctorComponent} from "./doctor/doctor.component";
import {LoginDoctorComponent} from "./login-doctor/login-doctor.component";
import {LoginPatientComponent} from "./login-patient/login-patient.component";
import {RegisterPatientComponent} from "./register-patient/register-patient.component";

const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "about", component: AboutComponent},
  {path: "index", component: HomePageComponent},
  {path: "doctors", component: DoctorComponent},
  {path: "loginDoctor", component: LoginDoctorComponent},
  {path: "loginPatient", component: LoginPatientComponent},
  {path: "registerDoctor", component: RegisterDoctorComponent},
  {path: "registerPatient", component: RegisterPatientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
