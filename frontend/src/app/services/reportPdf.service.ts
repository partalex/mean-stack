import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ReportPdf} from "../../model/reportPdf";

@Injectable({
    providedIn: 'root'
})
export class ReportPdfService {

    constructor(private http: HttpClient) {
    }

    uri = 'http://127.0.0.1:4000/reportPdf'

    create(reportPdf: ReportPdf) {
        return this.http.post(`${this.uri}/create`, {reportPdf: reportPdf})
    }

}
