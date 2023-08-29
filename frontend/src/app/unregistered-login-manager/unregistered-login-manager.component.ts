import {Component, OnInit} from '@angular/core';
import {Manager} from "../../model/manager";
import {ServiceSession} from "../services/session.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-unregistered-login-manager',
    templateUrl: './unregistered-login-manager.component.html',
    styleUrls: ['./unregistered-login-manager.component.css']
})
export class UnregisteredLoginManagerComponent implements OnInit {

    constructor(private service: ServiceSession, private router: Router) {
    }

    ngOnInit(): void {
        this.alert = document.getElementById("alert");
        this.alert.style.visibility = "hidden"
    }

    username: string;
    password: string;
    message: string;
    alert: HTMLElement;

    loginManager() {
        if (this.username == "" || this.password == "") {
            this.message = "Niste uneli sve podatke."
            this.alert.style.visibility = "visible"
            return
        }
        this.service.loginManager(this.username, this.password).subscribe((manager: Manager) => {
            if (manager != null) {
                localStorage.setItem("loggedInManager", manager._id)
                this.router.navigate(["manager"]).then(r => console.log(r))
            } else {
                this.message = "Losi podaci!";
                this.alert.style.visibility = "visible"
                return
            }
        })
    }
}
