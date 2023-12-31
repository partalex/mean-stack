import express from 'express';
import DoctorModel from '../models/doctor';

export class DoctorController {
    create = (req: express.Request, res: express.Response) => {
        let doctor = new DoctorModel(req.body.doctor);
        doctor.save((err, resp) => {
            if (err)
                res.status(400).json({'message': 'error'});
            else
                res.json({"message": "ok"})
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
        let _id = req.body.doctor._id;
        let doctor = new DoctorModel(req.body.doctor);
        DoctorModel.findOneAndUpdate({'_id': _id}, {
                $set: {
                    'firstname': doctor.firstname,
                    'lastname': doctor.lastname,
                    'username': doctor.username,
                    'password': doctor.password,
                    'approved': doctor.approved,
                    'deleted': doctor.deleted,
                    'address': doctor.address,
                    'mail': doctor.mail,
                    'image': doctor.image,
                    'phone': doctor.phone,
                    'licenceId': doctor.licenceId,
                    'specialization': doctor.specialization,
                    'medicineBranch': doctor.medicineBranch
                },
            },
            {new: true}, (err, newDoctor) => {
                if (err)
                    console.log(err);
                else
                    res.json(newDoctor);
            });
    }
    delete = (req: express.Request, res: express.Response) => {
        let id = req.body.id;
        DoctorModel.deleteOne({'_id': id}, (err, doctor) => {
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
            if (err)
                console.log(err);
            else
                res.json(doctor);
        });
    };

    search = (req: express.Request, res: express.Response) => {
        let search = req.body.search;
        let firstname = search.firstname;
        let lastname = search.lastname;
        let specialization = search.specialization;

        DoctorModel.find({
            'firstname': {$regex: firstname, $options: 'i'},
            'lastname': {$regex: lastname, $options: 'i'},
            'specialization': {$regex: specialization, $options: 'i'},
        }, (err, doctors) => {
            if (err)
                console.log(err);
            else
                res.json(doctors);
        });

    }

    readAllJoinSpecialization = (req: express.Request, res: express.Response) => {
        DoctorModel.aggregate([
            {
                $lookup: {
                    from: 'specializations',
                    localField: 'specialization',
                    foreignField: 'name',
                    as: 'specialization'
                },
            }
        ], (err, doctor) => {
            if (err)
                console.log(err);
            else
                res.json(doctor);
        });
    }
}
