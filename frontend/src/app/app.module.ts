import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {FormsModule} from "@angular/forms";
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from './app-routing.module';
import {AboutComponent} from './about/about.component';
import {DoctorComponent} from './doctor/doctor.component';
import {HomePageComponent} from './home-page/home-page.component';
import {LoginDoctorComponent} from './login-doctor/login-doctor.component';
import {LoginPatientComponent} from './login-patient/login-patient.component';
import {RegisterDoctorComponent} from './register-doctor/register-doctor.component';
import {RegisterPatientComponent} from './register-patient/register-patient.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';

@NgModule({
    declarations: [
        AppComponent,
        RegisterDoctorComponent,
        HomePageComponent,
        AboutComponent,
        DoctorComponent,
        LoginPatientComponent,
        LoginDoctorComponent,
        RegisterPatientComponent,
        NavigationComponent,
        DoctorProfileComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
