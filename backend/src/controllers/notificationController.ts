import express from 'express';
import NotificationModel from "../models/notifications";
import AppointmentTypeModel from "../models/appointmentType";

export class NotificationController {
    create = (req: express.Request, res: express.Response) => {
        let notification = new NotificationModel(req.body.notification);
        notification.save((err, resp) => {
            if (err)
                res.status(400).json({'message': 'error'});
            else
                res.json({"message": "ok"})
        })
    }

    read = (req: express.Request, res: express.Response) => {
        NotificationModel.findById(req.body.id, (err, notification) => {
            if (err)
                console.log(err);
            else
                res.json(notification);
        });
    }

    update = (req: express.Request, res: express.Response) => {
        let _id = req.body.notification._id;
        let notification = new NotificationModel(req.body.notification);
        NotificationModel.findOneAndUpdate({'_id': _id}, {
                $set: {
                    'seen': notification.seen
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
        NotificationModel.deleteOne({"_id": id}, (err, notification) => {
            if (err)
                console.log(err);
            else
                res.json({'message': "ok"});
        });
    }
    readAll = (req: express.Request, res: express.Response) => {
        NotificationModel.find({}, (err, notification) => {
            if (err)
                console.log(err);
            else
                res.json(notification);
        });
    };
    readAllByPatientId = (req: express.Request, res: express.Response) => {
        let patientId = req.body.patientId;
        NotificationModel.find({"patientId": patientId}, (err, notification) => {
            if (err)
                console.log(err);
            else
                res.json(notification);
        });
    };
}
