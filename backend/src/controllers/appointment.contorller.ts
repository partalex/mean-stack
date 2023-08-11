import express from 'express';
import AppointmentModel from '../models/appointments';


export class AppointmentController {
    getAll = (req: express.Request, res: express.Response) => {
        // find all appointments
        AppointmentModel.find({}, (err, appointments) => {
                if (err) {
                    console.log(err);
                } else {
                    res.json(appointments);
                }
            }
        );
    };

    addNew = (req: express.Request, res: express.Response) => {
        // add new appointment
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
        });
        appointment.save((err, resp) => {
            if (err) {
                console.log(err);
                res.status(400).json({'message': 'error'});
            } else {
                res.json({"message": "ok"})
            }
        })
    }

}
