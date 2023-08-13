import {Component, OnInit} from '@angular/core';
import {NotificationService} from "../services/notification.service";
import {Notification} from "../../model/notification";

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
        // this.serviceNotification.readAll().subscribe((notifications: Notification[]) => {
            this.notifications = notifications
        })
    }

}
