import express from 'express';
import PatientModel from '../models/patient';
import DoctorModel from '../models/doctor';
import ManagerModel from '../models/manager';

export class UnregisteredController {
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

    checkPatientUsername = (req: express.Request, res: express.Response) => {
        let username = req.body.username;

        PatientModel.findOne({'username': username}, (err, patient) => {
            if (err) {
                console.log(err);
            } else {
                res.json(patient);
            }
        });
    };

    checkPatientMail = (req: express.Request, res: express.Response) => {
        let mail = req.body.mail;

        PatientModel.findOne({'mail': mail}, (err, patient) => {
            if (err) {
                console.log(err);
            } else {
                res.json(patient);
            }
        });
    };


    checkDoctorExist = (req: express.Request, res: express.Response) => {
        let username = req.body.username;

        DoctorModel.findOne({'username': username}, (err, doctor) => {
            if (err) {
                console.log(err);
            } else {
                res.json(doctor);
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

    loginManager = (req: express.Request, res: express.Response) => {
        let username = req.body.username;
        let password = req.body.password;

        ManagerModel.findOne({'username': username, 'password': password}, (err, manager) => {
            if (err) {
                console.log(err);
            } else {
                res.json(manager);
            }
        });
    };

    registerPatient = (req: express.Request, res: express.Response) => {
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
