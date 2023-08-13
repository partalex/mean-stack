import express from 'express';
import NotificationModel from "../models/notifications";

export class NotificationController {
    create = (req: express.Request, res: express.Response) => {
        let notification = new NotificationModel({
            doctorFirstname: req.body.doctorFirstname,
            doctorLastname: req.body.doctorLastname,
            licenceId: req.body.licenceId,
            patientFirstname: req.body.patientFirstname,
            patientLastname: req.body.patientLastname,
            report: req.body.report,
            date: req.body.date,
            time: req.body.time
        });
        notification.save((err, resp) => {
            if (err) {
                console.log(err);
                res.status(400).json({'message': 'error'});
            } else {
                res.json({"message": "ok"})
            }
        })
    }

    read = (req: express.Request, res: express.Response) => {
        NotificationModel.findById(req.body.id, (err, report) => {
            if (err) {
                console.log(err);
            } else {
                res.json(report);
            }
        });
    }

    update = (req: express.Request, res: express.Response) => {
        let _id = req.body.report._id;
        NotificationModel.findOneAndUpdate({'_id': _id}, {
                $set: {
                    doctorFirstname: req.body.report.doctorFirstname,
                    doctorLastname: req.body.report.doctorLastname,
                    licenceId: req.body.report.licenceId,
                    patientFirstname: req.body.report.patientFirstname,
                    patientLastname: req.body.report.patientLastname,
                    report: req.body.report.report,
                    date: req.body.report.date,
                    time: req.body.report.time
                },
            },
            {new: true}, (err, patient) => {
                if (err)
                    console.log(err);
                else
                    res.json(patient);
            }
        );
    }
    delete = (req: express.Request, res: express.Response) => {
        let id = req.body.id;
        NotificationModel.deleteOne({"id": id}, (err, report) => {
            if (err) {
                console.log(err);
            } else {
                res.json(report);
            }
        });
    }
    readAll = (req: express.Request, res: express.Response) => {
        NotificationModel.find({}, (err, reports) => {
            if (err) {
                console.log(err);
            } else {
                res.json(reports);
            }
        });
    };
    readAllByPatientId = (req: express.Request, res: express.Response) => {
        let patientId = req.body.patientId;
        NotificationModel.find({"patientId": patientId}, (err, reports) => {
            if (err) {
                console.log(err);
            } else {
                res.json(reports);
            }
        });
    };
}
