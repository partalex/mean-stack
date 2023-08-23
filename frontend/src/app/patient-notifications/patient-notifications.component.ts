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

  updateSeen(notification) {
    notification.seen = !notification.seen
    this.serviceNotification.update(notification).subscribe((newNotification: Notification) => {
      this.ngOnInit()
    })
  }

  notifications: Notification[]

  getAllNotifications() {
    this.serviceNotification.readAllByPatientId(this.patientId).subscribe((notifications: Notification[]) => {
      this.notifications = notifications
    })
  }
}
