import express from 'express';
import PatientModel from "../models/patient";

export class PatientController {
    index = (req: express.Request, res: express.Response) => {
        console.log("/patient/index");
    };

    getPatientInfo = (req: express.Request, res: express.Response) => {
        let username = req.body.username;

        PatientModel.findOne({'username': username}, (err, patient) => {
            res.json(patient);
        });
    };

    changeInfo = (req: express.Request, res: express.Response) => {
        let username = req.body.username;
        PatientModel.deleteOne({'username': username}, (err, patient) => {
            res.json(patient);
        });
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

}
