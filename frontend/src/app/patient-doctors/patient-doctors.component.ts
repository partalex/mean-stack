import {Component, OnInit} from '@angular/core';
import {NotificationService} from "../services/notification.service";

@Component({
    selector: 'app-patient-doctors',
    templateUrl: './patient-doctors.component.html',
    styleUrls: ['./patient-doctors.component.css']
})
export class PatientDoctorsComponent implements OnInit {

    constructor(private serviceNotification: NotificationService) {
    }

    ngOnInit(): void {
    }

    notifications: Notification[]

    getAllNotifications() {
        // TODO - get notifications for patient
        let patientUsername = localStorage.getItem('loggedInPatient')
        // this.serviceNotification.readAll().subscribe((notifications: Notification[]) => {
        //     this.notifications = notifications
        // })
    }

}
