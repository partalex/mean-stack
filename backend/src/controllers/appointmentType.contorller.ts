import express from 'express';
import AppointmentTypeModel from '../models/appointmentType';


export class AppointmentTypeController {

    create = (req: express.Request, res: express.Response) => {
        let appointmentType = new AppointmentTypeModel(req.body.appointmentType);
        appointmentType.save((err, resp) => {
            if (err) {
                res.status(400).json({'message': 'error'})
            } else {
                res.json({"message": "ok"})
            }
        })
    }

    update = (req: express.Request, res: express.Response) => {
        // update all fields of appointmentType
        let _id = req.body.appointmentType.id;
        let appointmentType = new AppointmentTypeModel(req.body.appointmentType);
        AppointmentTypeModel.findOneAndUpdate({'_id': _id}, {
                $set: {
                    'title': appointmentType.title,
                    'description': appointmentType.description,
                    'descriptionStrong': appointmentType.descriptionStrong,
                    'specializationId': appointmentType.specializationId,
                    'doctors': appointmentType.doctors,
                    'price': appointmentType.price,
                    'approved': appointmentType.approved
                },
            },
            {new: true}, (err, appointment) => {
                if (err)
                    console.log(err);
                else
                    res.json(appointment);
            }
        );
    }

    delete = (req: express.Request, res: express.Response) => {
        let id = req.body.id;
        AppointmentTypeModel.deleteOne({'_id': id}, (err, appointmentType) => {
            if (err)
                console.log(err)
        })
    }

    read = (req: express.Request, res: express.Response) => {
        let id = req.body.id;
        AppointmentTypeModel.findOne({'_id': id}, (err, appointment) => {
            if (err)
                console.log(err)
            else
                res.json(appointment)
        })
    }
    readAll = (req: express.Request, res: express.Response) => {
        AppointmentTypeModel.find({}, (err, appointmentTypes) => {
                if (err) {
                    console.log(err);
                } else {
                    res.json(appointmentTypes);
                }
            }
        )
    }

    readByDoctorId = (req: express.Request, res: express.Response) => {
        let doctorId = req.body.id;
        AppointmentTypeModel.find({'doctorId': doctorId}, (err, appointmentTypes) => {
            if (err)
                console.log(err)
            else
                res.json(appointmentTypes)
        })
    }

    readAllByPatientId = (req: express.Request, res: express.Response) => {
        let patientId = req.body.patientId;
        AppointmentTypeModel.find({'patientId': patientId}, (err, appointmentTypes) => {
            if (err)
                console.log(err)
            else
                res.json(appointmentTypes)
        })
    }

    readRegisteredDoctor = (req: express.Request, res: express.Response) => {
        let doctorId = req.body.doctorId;
        AppointmentTypeModel.find({}, (err, appointmentTypes) => {
            if (err)
                console.log(err)
            else {
                let registeredAppointmentTypes = [];
                appointmentTypes.forEach((appointmentType) => {
                    appointmentType.doctors.forEach((doctor) => {
                        if (doctor === doctorId)
                            registeredAppointmentTypes.push(appointmentType)
                    })
                })
                res.json(registeredAppointmentTypes)
            }
        })
    }
}
