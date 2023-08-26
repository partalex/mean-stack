import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ManagerService} from "../services/manager.service";

@Component({
  selector: 'app-navigation-manager',
  templateUrl: './navigation-manager.component.html',
  styleUrls: ['./navigation-manager.component.css']
})
export class NavigationManagerComponent implements OnInit {

  constructor(public router: Router, private service: ManagerService) {
  }

  ngOnInit(): void {
    let loggedInDoctor = localStorage.getItem("loggedInDoctor")
    if (loggedInDoctor == null)
      this.router.navigate(["/loginDoctor"])
  }

  logOut() {
    this.service.logOutManager()
  }

}
