import express from 'express';
import ReportModel from "../models/reports";

export class ReportContorller {
    getAll = (req: express.Request, res: express.Response) => {
        // find all appointments
        ReportModel.find({}, (err, reports) => {
                if (err) {
                    console.log(err);
                } else {
                    res.json(reports);
                }
            }
        );
    };

    addNew = (req: express.Request, res: express.Response) => {
        let report = new ReportModel({
            doctorFirstname: req.body.doctorFirstname,
            doctorLastname: req.body.doctorLastname,
            licenceId: req.body.licenceId,
            patientFirstname: req.body.patientFirstname,
            patientLastname: req.body.patientLastname,
            report: req.body.report,
            date: req.body.date,
            time: req.body.time
        });
        report.save((err, resp) => {
            if (err) {
                console.log(err);
                res.status(400).json({'message': 'error'});
            } else {
                res.json({"message": "ok"})
            }
        })
    }
}
