import express from 'express';
import PatientModel from "../models/patient";

export class PatientController {
    create = (req: express.Request, res: express.Response) => {
        let patient = new PatientModel(req.body.patient);
        patient.save((err, resp) => {
            if (err) {
                console.log(err);
                res.status(400).json({'message': 'error'});
            } else {
                res.json({"message": "ok"})
            }
        })
    }
    read = (req: express.Request, res: express.Response) => {
        let _id = req.body.id;
        PatientModel.findOne({"_id": _id}, (err, patient) => {
            if (err) {
                res.status(400).json(err);
            } else {
                res.json(patient);
            }
        });
    }
    update = (req: express.Request, res: express.Response) => {
        let _id = req.body.patient._id;
        let patient = req.body.patient;
        PatientModel.findOneAndUpdate({'_id': _id}, {
                $set: {
                    'firstname': patient.firstname,
                    'lastname': patient.lastname,
                    'username': patient.username,
                    'password': patient.password,
                    'approved': patient.approved,
                    'deleted': patient.deleted,
                    'address': patient.address,
                    'phone': patient.phone,
                    'mail': patient.mail,
                    'image': patient.image
                },
            },
            {new: true}, (err, patient) => {
                if (err)
                    console.log(err);
                else
                    res.json(patient);
            });
    }
    delete = (req: express.Request, res: express.Response) => {
        let id = req.body.id;
        PatientModel.deleteOne({'_id': id}, (err, patient) => {
            res.json(patient);
        })
    }
    readByUsername = (req: express.Request, res: express.Response) => {
        let username = req.body.username;
        PatientModel.findOne({'username': username}, (err, patient) => {
            if (err)
                console.log(err)
            else
                res.json(patient)
        })
    }
    readByMail = (req: express.Request, res: express.Response) => {
        let mail = req.body.mail;
        PatientModel.findOne({'mail': mail}, (err, patient) => {
            if (err)
                console.log(err)
            else
                res.json(patient)
        })
    }
    readAll = (req: express.Request, res: express.Response) => {
        PatientModel.find({}, (err, patients) => {
            if (err) {
                console.log(err);
            } else {
                res.json(patients);
            }
        });
    }

}


