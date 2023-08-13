import express from 'express'
import {NotificationController} from "../controllers/notificationController";

const reportRouter = express.Router();
reportRouter.route('/create').post(
    (req, res) => new NotificationController().create(req, res)
)
reportRouter.route('/read').post(
    (req, res) => new NotificationController().read(req, res)
)
reportRouter.route('/update').post(
    (req, res) => new NotificationController().update(req, res)
)
reportRouter.route('/delete').post(
    (req, res) => new NotificationController().delete(req, res)
)
reportRouter.route('/readAll').post(
    (req, res) => new NotificationController().readAll(req, res)
)

reportRouter.route('/readAllByPatientId').post(
    (req, res) => new NotificationController().readAllByPatientId(req, res)
)

export default reportRouter;
