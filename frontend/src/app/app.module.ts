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
import {PatientProfileComponent} from './patient-profile/patient-profile.component';
import {RegisterPatientComponent} from './register-patient/register-patient.component';
import {NavigationDoctorComponent} from './navigation-doctor/navigation-doctor.component';
import {NavigationManagerComponent} from './navigation-manager/navigation-manager.component';
import {NavigationPatientComponent} from './navigation-patient/navigation-patient.component';
import {UnregisteredAboutComponent} from './unregistered-about/unregistered-about.component';
import {PatientNotificationsComponent} from './patient-notifications/patient-notifications.component';
import {NavigationUnregisteredComponent} from './navigation-unregistered/navigation-unregistered.component';
import {ManagerRegisterDoctorComponent} from './manager-register-doctor/manager-register-doctor.component';
import {ManagerMedicineChangesComponent} from './manager-medicine-changes/manager-medicine-changes.component';
import {UnregisteredLoginDoctorComponent} from './unregistered-login-doctor/unregistered-login-doctor.component';
import {UnregisteredLoginPatientComponent} from './unregistered-login-patient/unregistered-login-patient.component';
import {UnregisteredDoctorsComponent} from './unregistered-doctors/unregistered-doctors.component';
import {UnregisteredLoginManagerComponent} from './unregistered-login-manager/unregistered-login-manager.component';
import {ManagerApprovePatientComponent} from './manager-approve-patient/manager-approve-patient.component';
import {PatientDoctorsComponent} from './patient-doctors/patient-doctors.component';
import {DoctorsCardsComponent} from './doctors-cards/doctors-cards.component';
import {UnregistredDoctorsComponent} from './unregistred-doctors/unregistred-doctors.component';
import {PatientReportsComponent} from './patient-reports/patient-reports.component';
import {
    PatientScheduleAppointmentComponent
} from './patient-schedule-appointment/patient-schedule-appointment.component';
import { PatientDoctorProfileComponent } from './patient-doctor-profile/patient-doctor-profile.component';
import { DoctorPatientRecordComponent } from './doctor-patient-record/doctor-patient-record.component';
import { ManagerNotificationComponent } from './manager-notification/manager-notification.component';
import {NgOptimizedImage} from "@angular/common";

@NgModule({
    declarations: [
        AppComponent,
        RegisterPatientComponent,
        DoctorProfileComponent,
        NavigationUnregisteredComponent,
        NavigationUnregisteredComponent,
        NavigationDoctorComponent,
        NavigationManagerComponent,
        NavigationPatientComponent,
        DoctorAnyComponent,
        DoctorViewsComponent,
        PatientProfileComponent,
        PatientViewsComponent,
        PatientNotificationsComponent,
        PatientDoctorComponent,
        ManagerRegisterDoctorComponent,
        ManagerMedicineChangesComponent,
        UnregisteredAboutComponent,
        UnregisteredLoginDoctorComponent,
        UnregisteredLoginPatientComponent,
        UnregisteredDoctorsComponent,
        UnregisteredLoginManagerComponent,
        ManagerApprovePatientComponent,
        PatientDoctorsComponent,
        DoctorsCardsComponent,
        UnregistredDoctorsComponent,
        PatientReportsComponent,
        PatientScheduleAppointmentComponent,
        PatientDoctorProfileComponent,
        DoctorPatientRecordComponent,
        ManagerNotificationComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        NgOptimizedImage,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
