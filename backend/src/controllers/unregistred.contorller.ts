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

}
