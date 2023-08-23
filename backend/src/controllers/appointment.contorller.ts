import express from 'express';
import AppointmentModel from '../models/appointment';

export class AppointmentController {

    create = (req: express.Request, res: express.Response) => {
        let appointment = new AppointmentModel(req.body.appointment);
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
        let _id = req.body.appointment.id;
        let appointment = req.body.appointment;
        // update
        AppointmentModel.findOneAndUpdate({'_id': _id}, {
                $set: {
                    patientId: appointment.patientId,
                    doctorId: appointment.doctorId,
                    date: appointment.date,
                    time: appointment.time,
                    approved: appointment.approved
                },
            },
            {new: true}, (err, appointment) => {
                if (err)
                    console.log(err)
                else
                    res.json(appointment)
            })
    }

    delete = (req: express.Request, res: express.Response) => {
        let id = req.body.id;
        AppointmentModel.deleteOne({'_id': id}, (err, appointment) => {
            if (err)
                console.log(err)
        })
    }

    read = (req: express.Request, res: express.Response) => {
        let id = req.body.id;
        AppointmentModel.findOne({'_id': id}, (err, appointment) => {
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

    readByDoctorId = (req: express.Request, res: express.Response) => {
        let doctorId = req.body.doctorId
        AppointmentModel.find({'doctorId': doctorId}, (err, appointments) => {
            if (err)
                console.log(err)
            else
                res.json(appointments)
        })
    }

    readByPatientId = (req: express.Request, res: express.Response) => {
        let patientId = req.body.patientId;
        AppointmentModel.find({'patientId': patientId}, (err, appointments) => {
            if (err)
                console.log(err)
            else
                res.json(appointments)
        })
    }

}
