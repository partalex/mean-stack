import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {FormsModule} from "@angular/forms";
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {DoctorAnyComponent} from './doctor-any/doctor-any.component';
import {DoctorViewsComponent} from './doctor-views/doctor-views.component';
import {PatientViewsComponent} from './patient-views/patient-views.component';
import {DoctorProfileComponent} from './doctor-profile/doctor-profile.component';
import {PatientDoctorComponent} from './patient-doctor/patient-doctor.component';
import {RegisterDoctorComponent} from './register-doctor/register-doctor.component';
import {PatientProfileComponent} from './patient-profile/patient-profile.component';
import {PatientDoctorsComponent} from './patient-doctors/patient-doctors.component';
import {ManagerProfileComponent} from './manager-profile/manager-profile.component';
import {RegisterPatientComponent} from './register-patient/register-patient.component';
import {PatientCalendarComponent} from './patient-calendar/patient-calendar.component';
import {NavigationDoctorComponent} from './navigation-doctor/navigation-doctor.component';
import {NavigationManagerComponent} from './navigation-manager/navigation-manager.component';
import {NavigationPatientComponent} from './navigation-patient/navigation-patient.component';
import {UnregisteredIndexComponent} from './unregistered-index/unregistered-index.component';
import {ManagerPromotionsComponent} from './manager-promotions/manager-promotions.component';
import {UnregisteredAboutComponent} from './unregistered-about/unregistered-about.component';
import {PatientNotificationsComponent} from './patient-notifications/patient-notifications.component';
import {NavigationUnregisteredComponent} from './navigation-unregistered/navigation-unregistered.component';
import {ManagerRegisterDoctorComponent} from './manager-register-doctor/manager-register-doctor.component';
import {ManagerMedicineChangesComponent} from './manager-medicine-changes/manager-medicine-changes.component';
import {UnregisteredLoginDoctorComponent} from './unregistered-login-doctor/unregistered-login-doctor.component';
import {UnregisteredLoginPatientComponent} from './unregistered-login-patient/unregistered-login-patient.component';

@NgModule({
    declarations: [
        AppComponent,
        RegisterDoctorComponent,
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
        PatientProfileComponent,
        PatientDoctorsComponent,
        PatientViewsComponent,
        PatientNotificationsComponent,
        PatientCalendarComponent,
        PatientDoctorComponent,
        ManagerRegisterDoctorComponent,
        ManagerProfileComponent,
        ManagerPromotionsComponent,
        ManagerMedicineChangesComponent,
        UnregisteredAboutComponent,
        UnregisteredLoginDoctorComponent,
        UnregisteredLoginPatientComponent
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
