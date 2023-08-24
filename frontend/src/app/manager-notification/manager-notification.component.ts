import {Component, OnInit} from '@angular/core';
import {Notification} from "../../model/notification";
import {NotificationService} from "../services/notification.service";

@Component({
    selector: 'app-manager-notification',
    templateUrl: './manager-notification.component.html',
    styleUrls: ['./manager-notification.component.css']
})
export class ManagerNotificationComponent implements OnInit {

    constructor(private notificationService: NotificationService) {
    }

    ngOnInit(): void {
        this.getAllNotifications()
        this.newNotification = new Notification("", "")

        this.alert = document.getElementById("alert");
        this.alert.style.visibility = "hidden"
    }

    notifications: Notification[]
    newNotification: Notification
    alert: HTMLElement;
    message: string;


    deactivate(notification) {
        notification.active = !notification.active
        this.notificationService.update(notification).subscribe((newNotification: Notification) => {
            this.ngOnInit()
        })
    }


    getAllNotifications() {
        this.notificationService.readAll().subscribe((notifications: Notification[]) => {
            this.notifications = notifications
        })
    }

    addNotification() {
        // check if notification is valid
        if (this.newNotification.name == "" || this.newNotification.description == "") {
            this.message = "Sva polja moraju biti popunjena."
            this.alert.style.visibility = "visible"
            return
        }

        let id = Math.random().toString(36).substr(2, 9);


        this.notificationService.create(this.newNotification).subscribe((notification: Notification) => {
            this.ngOnInit()
        })
    }

}
