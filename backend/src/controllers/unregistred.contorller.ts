import express from 'express';
import PatientModel from '../models/patient';
import DoctorModel from '../models/doctor';

export class UnregistredController {
    loginPatient = (req: express.Request, res: express.Response) => {
        let username = req.body.username;
        let password = req.body.password;

        PatientModel.findOne({'username': username, 'password': password}, (err, patient) => {
            if (err) {
                console.log(err);
            } else {
                res.json(patient);
            }
        });
    };
    loginDoctor = (req: express.Request, res: express.Response) => {
        let username = req.body.username;
        let password = req.body.password;

        DoctorModel.findOne({'username': username, 'password': password}, (err, doctor) => {
            if (err) {
                console.log(err);
            } else {
                res.json(doctor);
            }
        });
    };

    registerPatient = (req: express.Request, res: express.Response) => {
        let patient = new PatientModel({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.username,
            password: req.body.password,
            phone: req.body.phone,
            mail: req.body.mail,
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
