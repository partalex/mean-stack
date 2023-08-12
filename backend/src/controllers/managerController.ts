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
}
