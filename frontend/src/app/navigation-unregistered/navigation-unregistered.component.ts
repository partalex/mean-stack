import {Component, OnInit} from '@angular/core';
import {UnregisteredService} from "../services/unregistered.service";

@Component({
    selector: 'app-navigation-unregistered',
    templateUrl: './navigation-unregistered.component.html',
    styleUrls: ['./navigation-unregistered.component.css']
})
export class NavigationUnregisteredComponent implements OnInit {

    constructor(private service: UnregisteredService) {
    }

    ngOnInit(): void {
    }

}
