import express from 'express';
import ReportPdfModel from "../models/reportPdf";

export class ReportPdfController {
    create = (req: express.Request, res: express.Response) => {
        let reportPdf = new ReportPdfModel(req.body.reportPdf);
        reportPdf.save((err, resp) => {
            if (err) {
                console.log(err);
                res.status(400).json({'message': 'error'});
            } else {
                res.json({"message": "ok"})
            }
        })
    }
}
