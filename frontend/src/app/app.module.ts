import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {FormsModule} from "@angular/forms";
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from './app-routing.module';
import {AboutComponent} from './about/about.component';
import {LoginDoctorComponent} from './login-doctor/login-doctor.component';
import {LoginPatientComponent} from './login-patient/login-patient.component';
import {DoctorProfileComponent} from './doctor-profile/doctor-profile.component';
import {RegisterDoctorComponent} from './register-doctor/register-doctor.component';
import {RegisterPatientComponent} from './register-patient/register-patient.component';
import {NavigationUnregisteredComponent} from './navigation-unregistered/navigation-unregistered.component';
import {NavigationDoctorComponent} from './navigation-doctor/navigation-doctor.component';
import {NavigationManagerComponent} from './navigation-manager/navigation-manager.component';
import {NavigationPatientComponent} from './navigation-patient/navigation-patient.component';
import {UnregisteredIndexComponent} from './unregistered-index/unregistered-index.component';
import {DoctorAnyComponent} from './doctor-any/doctor-any.component';
import {DoctorViewsComponent} from './doctor-views/doctor-views.component';
import {DoctorsComponent} from './doctors/doctors.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { PatientDoctorsComponent } from './patient-doctors/patient-doctors.component';
import { PatientViewsComponent } from './patient-views/patient-views.component';
import { PatientNotificationsComponent } from './patient-notifications/patient-notifications.component';
import { PatientCalendarComponent } from './patient-calendar/patient-calendar.component';
import { PatientDoctorComponent } from './patient-doctor/patient-doctor.component';
import { ManagerRegisterDoctorComponent } from './manager-register-doctor/manager-register-doctor.component';
import { ManagerProfileComponent } from './manager-profile/manager-profile.component';
import { ManagerPromotionsComponent } from './manager-promotions/manager-promotions.component';
import { ManagerMedicineChangesComponent } from './manager-medicine-changes/manager-medicine-changes.component';

@NgModule({
    declarations: [
        AppComponent,
        RegisterDoctorComponent,
        AboutComponent,
        LoginPatientComponent,
        LoginDoctorComponent,
        RegisterPatientComponent,
        DoctorProfileComponent,
        NavigationUnregisteredComponent,
        NavigationUnregisteredComponent,
        NavigationDoctorComponent,
        NavigationManagerComponent,
        NavigationPatientComponent,
        UnregisteredIndexComponent,
        DoctorAnyComponent,
        DoctorViewsComponent,
        DoctorsComponent,
        PatientProfileComponent,
        PatientDoctorsComponent,
        PatientViewsComponent,
        PatientNotificationsComponent,
        PatientCalendarComponent,
        PatientDoctorComponent,
        ManagerRegisterDoctorComponent,
        ManagerProfileComponent,
        ManagerPromotionsComponent,
        ManagerMedicineChangesComponent
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
