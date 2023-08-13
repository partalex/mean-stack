import {Component, OnInit} from '@angular/core';
import {PatientService} from "../services/patient.service";
import {NotificationService} from "../services/notification.service";

@Component({
    selector: 'app-patient-notifications',
    templateUrl: './patient-notifications.component.html',
    styleUrls: ['./patient-notifications.component.css']
})
export class PatientNotificationsComponent implements OnInit {

    constructor(private serviceNotification: NotificationService) {
        this.getAllNotifications()
    }

    patientId = localStorage.getItem("loggedInPatient")

    ngOnInit(): void {
    }

    notifications: Notification[]

    getAllNotifications() {
        this.serviceNotification.readAllByPatientId(this.patientId).subscribe((notifications: Notification[]) => {
            this.notifications = notifications
        })
    }

}
