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
}
