import express from 'express';
import ReportModel from "../models/report";
import AppointmentModel from "../models/appointment";

export class ReportController {
    create = (req: express.Request, res: express.Response) => {
        let report = new ReportModel(req.body.report);
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
        let _id = req.body.report._id;
        ReportModel.findOneAndUpdate({'_id': _id}, {
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
        ReportModel.deleteOne({"_id": id}, (err, report) => {
            if (err) {
                console.log(err);
            } else {
                res.json(report);
            }
        });
    }
    readAll = (req: express.Request, res: express.Response) => {
        ReportModel.find({}, (err, reports) => {
            if (err) {
                console.log(err);
            } else {
                res.json(reports);
            }
        });
    };

    readByDoctorId = (req: express.Request, res: express.Response) => {
        let doctorId = req.body.doctorId;
        AppointmentModel.find({'doctorId': doctorId}, (err, appointments) => {
            if (err) {
                console.log(err);
            } else {
                ReportModel.aggregate([
                    {
                        $lookup: {
                            from: "appointments",
                            localField: "appointmentId",
                            foreignField: "_id",
                            as: "appointment"
                        }
                    },
                    {
                        $match: {
                            "appointment.doctorId": doctorId
                        }
                    }
                ], (err, reports) => {
                    if (err) {
                        console.log(err);
                    } else {
                        res.json(reports);
                    }
                });
            }
        })
    }

    readByPatientId = (req: express.Request, res: express.Response) => {
        let patientId = req.body.patientId;
        // find appointments by patientId and join with reports by appointmentId
        AppointmentModel.find({'patientId': patientId}, (err, appointments) => {
            if (err) {
                console.log(err);
            } else {
                ReportModel.aggregate([
                    {
                        $lookup: {
                            from: "appointments",
                            localField: "appointmentId",
                            foreignField: "_id",
                            as: "appointment"
                        }
                    },
                    {
                        $match: {
                            "appointment.patientId": patientId
                        }
                    }
                ], (err, reports) => {
                    if (err) {
                        console.log(err);
                    } else {
                        res.json(reports);
                    }
                });
            }
        })
    }
}
