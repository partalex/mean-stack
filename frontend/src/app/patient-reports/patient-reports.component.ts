import {Component, OnInit} from '@angular/core';
import {Report} from "../../model/report";
import {ReportService} from "../services/report.service";

@Component({
    selector: 'app-patient-reports',
    templateUrl: './patient-reports.component.html',
    styleUrls: ['./patient-reports.component.css']
})
export class PatientReportsComponent implements OnInit {

    constructor(private serviceReport: ReportService) {
        this.getAllReports()
    }

    ngOnInit(): void {
    }

    reports: Report[]

    getAllReports() {
        let patientId = localStorage.getItem("loggedInPatient")
        this.serviceReport.readAllByPatient(patientId).subscribe((reports: Report[]) => {
            this.reports = reports;
        })
    }

}
