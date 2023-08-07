import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterDoctorComponent} from "./register-doctor/register-doctor.component";
import {UnregisteredIndexComponent} from "./unregistered-index/unregistered-index.component";
import {AboutComponent} from "./about/about.component";
import {LoginDoctorComponent} from "./login-doctor/login-doctor.component";
import {LoginPatientComponent} from "./login-patient/login-patient.component";
import {RegisterPatientComponent} from "./register-patient/register-patient.component";
import {DoctorProfileComponent} from "./doctor-profile/doctor-profile.component";
import {DoctorSkeletonComponent} from "./doctor-skeleton/doctor-skeleton.component";

const routes: Routes = [
    {path: "about", component: AboutComponent},
    {path: "", component: UnregisteredIndexComponent},
    {path: "doctors", component: DoctorSkeletonComponent},
    {path: "index", component: UnregisteredIndexComponent},
    {path: "loginDoctor", component: LoginDoctorComponent},
    {path: "loginPatient", component: LoginPatientComponent},
    {path: "doctor/profile", component: DoctorProfileComponent},
    {path: "registerDoctor", component: RegisterDoctorComponent},
    {path: "registerPatient", component: RegisterPatientComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
