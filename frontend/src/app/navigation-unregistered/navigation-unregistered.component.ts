import {Component, OnInit} from '@angular/core';
import {SessionService} from "../services/session.service";

@Component({
    selector: 'app-navigation-unregistered',
    templateUrl: './navigation-unregistered.component.html',
    styleUrls: ['./navigation-unregistered.component.css']
})
export class NavigationUnregisteredComponent implements OnInit {

    constructor(private service: SessionService) {
    }

    ngOnInit(): void {
    }

}
