import {Component, OnInit} from '@angular/core';
import {Manager} from "../../model/manager";
import {UnregisteredService} from "../services/unregistered.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-unregistered-login-manager',
    templateUrl: './unregistered-login-manager.component.html',
    styleUrls: ['./unregistered-login-manager.component.css']
})
export class UnregisteredLoginManagerComponent implements OnInit {

    constructor(private service: UnregisteredService, private router: Router) {
    }

    ngOnInit(): void {
    }

    username: string;
    password: string;
    message: string;

    loginManager() {
        this.service.loginDoctor(this.username, this.password).subscribe((manager: Manager) => {
            if (manager != null) {
                localStorage.setItem("loggedInManager", manager.username)
                this.router.navigate([manager])
            } else {
                this.message = "Losi podaci!";
                return;
            }
        })
    }

}
