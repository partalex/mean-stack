import express from 'express';
import SpecializationModel from "../models/spacializations";

export class SpecializationController {
    create = (req: express.Request, res: express.Response) => {
        let report = new SpecializationModel({
            name: req.body.name,
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
        SpecializationModel.findById(req.body.id, (err, report) => {
            if (err) {
                console.log(err);
            } else {
                res.json(report);
            }
        });
    }

    update = (req: express.Request, res: express.Response) => {
        let _id = req.body.report._id;
        SpecializationModel.findOneAndUpdate({'_id': _id}, {
                $set: {
                    name: req.body.report.name,
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
        SpecializationModel.deleteOne({"id": id}, (err, report) => {
            if (err) {
                console.log(err);
            } else {
                res.json(report);
            }
        });
    }
    readAll = (req: express.Request, res: express.Response) => {
        SpecializationModel.find({}, (err, reports) => {
            if (err) {
                console.log(err);
            } else {
                res.json(reports);
            }
        });
    };
}
