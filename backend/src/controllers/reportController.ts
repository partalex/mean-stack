import express from 'express';
import ReportModel from "../models/reports";

export class ReportController {
    create = (req: express.Request, res: express.Response) => {
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

    read = (req: express.Request, res: express.Response) => {
        ReportModel.findById(req.body.id, (err, report) => {
            if (err) {
                console.log(err);
            } else {
                res.json(report);
            }
        });
    }

    update = (req: express.Request, res: express.Response) => {
        ReportModel.findByIdAndDelete(req.body.id, (err, report) => {
            if (err) {
                console.log(err);
            } else {
                res.json(report);
            }
        });
        // create new
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
    delete = (req: express.Request, res: express.Response) => {
        let id = req.body.id;
        ReportModel.deleteOne({"id": id}, (err, report) => {
            if (err) {
                console.log(err);
            } else {
                res.json(report);
            }
        });
    }
    readAll = (req: express.Request, res: express.Response) => {
        ReportModel.find({}, (err, reports) => {
            if (err){
                console.log(err);
            }
            else{
                res.json(reports);
            }
        });
    };
}
