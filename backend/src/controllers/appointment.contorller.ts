import express from 'express';
import AppointmentModel from '../models/appointments';


export class AppointmentController {

    create = (req: express.Request, res: express.Response) => {
        let appointment = new AppointmentModel({
            doctorFirstname: req.body.doctorFirstname,
            doctorLastname: req.body.doctorLastname,
            licenceId: req.body.licenceId,
            branchMedicine: req.body.branchMedicine,
            durationMinutes: req.body.durationMinutes,
            price: req.body.price,
            title: req.body.title,
            descriptionStrong: req.body.descriptionStrong,
            description: req.body.description
        })
        appointment.save((err, resp) => {
            if (err) {
                console.log(err);
                res.status(400).json({'message': 'error'})
            } else {
                res.json({"message": "ok"})
            }
        })
    }

    update = (req: express.Request, res: express.Response) => {
        let _id = req.body.patient._id;
        AppointmentModel.findOneAndUpdate({'_id': _id}, {
                $set: {
                    doctorFirstname: req.body.doctorFirstname,
                    doctorLastname: req.body.doctorLastname,
                    licenceId: req.body.licenceId,
                    branchMedicine: req.body.branchMedicine,
                    durationMinutes: req.body.durationMinutes,
                    price: req.body.price,
                    title: req.body.title,
                    descriptionStrong: req.body.descriptionStrong,
                    description: req.body.description
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
        AppointmentModel.deleteOne({'id': id}, (err, appointment) => {
            if (err)
                console.log(err)
        })
    }

    read = (req: express.Request, res: express.Response) => {
        let id = req.body.id;
        AppointmentModel.findOne({'id': id}, (err, appointment) => {
            if (err)
                console.log(err)
            else
                res.json(appointment)
        })
    }
    readAll = (req: express.Request, res: express.Response) => {
        // find all appointments
        AppointmentModel.find({}, (err, appointments) => {
                if (err) {
                    console.log(err);
                } else {
                    res.json(appointments);
                }
            }
        )
    }
}
