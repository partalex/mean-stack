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
    }

    patientId = localStorage.getItem("loggedInPatient")

    ngOnInit(): void {
        this.getAllNotifications()
    }

    toLocalDate(date: Date) {
        return new Date(date).toLocaleDateString()
    }

    toLocaleTimeString(date: Date) {
        return new Date(date).toLocaleTimeString()
    }

    notifications: Notification[]


    didISaw(notification) {
        return notification.seenByPatients.includes(this.patientId)
    }

    setSeen(notification) {
        if (!this.didISaw(notification))
            notification.seenByPatients.push(this.patientId)
        this.serviceNotification.update(notification).subscribe((newNotification: Notification) => {
            this.ngOnInit()
        })
    }

    getAllNotifications() {
        this.serviceNotification.readAllByPatientId(this.patientId).subscribe((notifications: Notification[]) => {
            // this.notifications = notifications
            // filter out the notifications that are not active
            this.notifications = notifications.filter(notification => notification.active)
        })
    }

}
