import express from 'express';
import DoctorModel from '../models/doctor';


export class DoctorController {
    create = (req: express.Request, res: express.Response) => {
        let doctor = new DoctorModel({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.username,
            phone: req.body.phone,
            mail: req.body.mail,
            image: req.body.image,
            licenceId: req.body.licenceId,
            specialization: req.body.specialization,
            medicineBranch: req.body.medicineBranch
        })

        doctor.save((err, resp) => {
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
        DoctorModel.findById(id, (err, doctor) => {
            if (err)
                console.log(err)
            else
                res.json(doctor)
        })
    }
    update = (req: express.Request, res: express.Response) => {
        let _id = req.body.patient._id;
        DoctorModel.findOneAndUpdate({'_id': _id}, {
                $set: {
                    firstname: req.body.patient.firstname,
                    lastname: req.body.patient.lastname,
                    username: req.body.patient.username,
                    password: req.body.patient.password,
                    approved: req.body.patient.approved,
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
            }
        );
    }
    delete = (req: express.Request, res: express.Response) => {
        let id = req.body.id;
        DoctorModel.deleteOne({'id': id}, (err, doctor) => {
            if (err)
                console.log(err)
            else
                res.json(doctor)
        })
    }
    readAll = (req: express.Request, res: express.Response) => {
        DoctorModel.find({}, (err, appointments) => {
            if (err)
                console.log(err)
            else
                res.json(appointments)
        })
    }
    readByUsername = (req: express.Request, res: express.Response) => {
        let username = req.body.username;
        DoctorModel.findOne({'username': username}, (err, doctor) => {
            if (err)
                console.log(err)
            else
                res.json(doctor)
        })
    }
    readByMail = (req: express.Request, res: express.Response) => {
        let mail = req.body.mail;

        DoctorModel.findOne({'mail': mail}, (err, doctor) => {
            if (err) {
                console.log(err);
            } else {
                res.json(doctor);
            }
        });
    };
}
