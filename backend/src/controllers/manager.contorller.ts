import express from 'express';
import DoctorModel from "../models/doctor";

export class ManagerController {


    checkDoctorUsername = (req: express.Request, res: express.Response) => {
        let username = req.body.username;

        DoctorModel.findOne({'username': username}, (err, doctor) => {
            if (err) {
                console.log(err);
            } else {
                res.json(doctor);
            }
        });
    };

    checkDoctorMail = (req: express.Request, res: express.Response) => {
        let mail = req.body.mail;

        DoctorModel.findOne({'mail': mail}, (err, doctor) => {
            if (err) {
                console.log(err);
            } else {
                res.json(doctor);
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
