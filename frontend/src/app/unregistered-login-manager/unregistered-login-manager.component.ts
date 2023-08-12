import {Component, OnInit} from '@angular/core';
import {Manager} from "../../model/manager";
import {ServiceSession} from "../services/service-session.service";
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
    }

    username: string;
    password: string;
    message: string;

    loginManager() {
        this.service.loginManager(this.username, this.password).subscribe((manager: Manager) => {
            if (this.username == "" || this.password == "") {
                this.message = "Niste uneli sve podatke!";
                return;
            }
            if (manager != null) {
                localStorage.setItem("loggedInManager", manager._id)
                this.router.navigate([manager])
            } else {
                this.message = "Losi podaci!";
                return;
            }
        })
    }
}
