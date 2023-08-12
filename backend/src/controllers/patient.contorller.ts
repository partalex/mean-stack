import express from 'express';
import PatientModel from "../models/patient";

export class PatientController {
    create = (req: express.Request, res: express.Response) => {
        let patient = new PatientModel({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.username,
            password: req.body.password,
            address: req.body.address,
            phone: req.body.phone,
            mail: req.body.mail,
            image: req.body.image,
        });

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
        let id = req.body.id;
        PatientModel.findOne({"id": id}, (err, patients) => {
            if (err) {
                res.status(400).json(err);
            } else {
                res.json(patients);
            }
        });
    }
    update = (req: express.Request, res: express.Response) => {
        let _id = req.body.patient._id;
        PatientModel.findOneAndUpdate({'_id': _id}, {
                $set: {
                    // update fields
                    firstname: req.body.patient.firstname,
                    lastname: req.body.patient.lastname,
                    username: req.body.patient.username,
                    password: req.body.patient.password,
                    address: req.body.patient.address,
                    phone: req.body.patient.phone,
                    mail: req.body.patient.mail,
                    image: req.body.patient.image
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
        PatientModel.deleteOne({'id': id}, (err, patient) => {
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
