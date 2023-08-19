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
        // update appointment
        AppointmentModel.findOneAndUpdate({'_id': _id}, {
                $set: {
                    doctorFirstname: req.body.appointment.doctorFirstname,
                    doctorLastname: req.body.appointment.doctorLastname,
                    licenceId: req.body.appointment.licenceId,
                    branchMedicine: req.body.appointment.branchMedicine,
                    durationMinutes: req.body.appointment.durationMinutes,
                    price: req.body.appointment.price,
                    title: req.body.appointment.title,
                    descriptionStrong: req.body.appointment.descriptionStrong,
                    description: req.body.appointment.description
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
