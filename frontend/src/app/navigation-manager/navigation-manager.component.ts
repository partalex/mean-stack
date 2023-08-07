import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-navigation-manager',
    templateUrl: './navigation-manager.component.html',
    styleUrls: ['./navigation-manager.component.css']
})
export class NavigationManagerComponent implements OnInit {

    constructor(public router: Router) {
    }

    ngOnInit(): void {
    }

    logOut() {
        // TODO - close session
        this.router.navigate(['/']);
    }

}
