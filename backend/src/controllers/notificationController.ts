import express from 'express';
import NotificationModel from "../models/notifications";

export class NotificationController {
    create = (req: express.Request, res: express.Response) => {
        let notification = new NotificationModel(req.body.notification);
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
        NotificationModel.findById(req.body.id, (err, notification) => {
            if (err) {
                console.log(err);
            } else {
                res.json(notification);
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
        NotificationModel.deleteOne({"_id": id}, (err, notification) => {
            if (err) {
                console.log(err);
            } else {
                res.json(notification);
            }
        });
    }
    readAll = (req: express.Request, res: express.Response) => {
        NotificationModel.find({}, (err, notification) => {
            if (err) {
                console.log(err);
            } else {
                res.json(notification);
            }
        });
    };
    readAllByPatientId = (req: express.Request, res: express.Response) => {
        let patientId = req.body.patientId;
        NotificationModel.find({"patientId": patientId}, (err, notification) => {
            if (err) {
                console.log(err);
            } else {
                res.json(notification);
            }
        });
    };
}
