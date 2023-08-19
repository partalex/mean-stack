import express from 'express';
import SpecializationModel from "../models/spacialization";

export class SpecializationController {
    create = (req: express.Request, res: express.Response) => {
        let specialization = new SpecializationModel(req.body.specialization);
        specialization.save((err, resp) => {
            if (err) {
                console.log(err);
                res.status(400).json({'message': 'error'});
            } else {
                res.json({"message": "ok"})
            }
        })
    }

    read = (req: express.Request, res: express.Response) => {
        SpecializationModel.findById(req.body.id, (err, specialization) => {
            if (err) {
                console.log(err);
            } else {
                res.json(specialization);
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
        SpecializationModel.deleteOne({"_id": id}, (err, specialization) => {
            if (err) {
                console.log(err);
            } else {
                res.json(specialization);
            }
        });
    }
    readAll = (req: express.Request, res: express.Response) => {
        SpecializationModel.find({}, (err, specializations) => {
            if (err) {
                console.log(err);
            } else {
                res.json(specializations);
            }
        });
    };
}
