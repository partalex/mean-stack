import express from 'express';
import ManagerModel from '../models/manager';
import DoctorModel from "../models/doctor";

export class ManagerController {
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

    registerDoctor = (req: express.Request, res: express.Response) => {
        let doctor = new DoctorModel({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.username,
            password: req.body.password,
            phone: req.body.phone,
            mail: req.body.mail,
            licenceId: req.body.licenceId,
            specialization: req.body.specialization,
            medicineBranch: req.body.medicineBranch
        });

        doctor.save((err, resp) => {
            if (err) {
                console.log(err);
                res.status(400).json({'message': 'error'});
            } else {
                res.json({"message": "ok"})
            }
        })
    }

    approvePatient = (req: express.Request, res: express.Response) => {
        console.log("/manager/approvePatient");
    };

}
