import express from 'express';
import ManagerModel from "../models/manager";

export class ManagerController {
    read = (req: express.Request, res: express.Response) => {
        ManagerModel.findOne({}, (err, manager) => {
            if (err) {
                res.status(400).json(err);
            } else {
                res.json(manager);
            }
        })
    }

    create = (req: express.Request, res: express.Response) => {
        let manager = new ManagerModel(req.body.manager);
        manager.save((err, resp) => {
            if (err) {
                console.log(err);
                res.status(400).json({'message': 'error'})
            } else {
                res.json({"message": "ok"})
            }
        })
    }

    readAll = (req: express.Request, res: express.Response) => {
        ManagerModel.find({}, (err, managers) => {
            if (err) {
                console.log(err);
            } else {
                res.json(managers);
            }
        })
    }

    update = (req: express.Request, res: express.Response) => {
        let _id = req.body.manager._id;
        let manager = new ManagerModel(req.body.manager);
        ManagerModel.findOneAndUpdate({'_id': _id}, {
                $set: {
                    'firstname': manager.firstname,
                    'lastname': manager.lastname,
                    'username': manager.username,
                    'password': manager.password,
                    'image': manager.image
                },
            },
            {new: true}, (err, newManager) => {
                if (err)
                    console.log(err);
                else
                    res.json(newManager);
            })
    }
}
