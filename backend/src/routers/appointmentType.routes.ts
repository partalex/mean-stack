import express from 'express'
import {AppointmentTypeController} from "../controllers/appointmentType.contorller";

const appointmentTypeRouter = express.Router();
appointmentTypeRouter.route('/create').post(
    (req, res) => new AppointmentTypeController().create(req, res)
)
appointmentTypeRouter.route('/read').post(
    (req, res) => new AppointmentTypeController().read(req, res)
)
appointmentTypeRouter.route('/delete').post(
    (req, res) => new AppointmentTypeController().delete(req, res)
)
appointmentTypeRouter.route('/update').post(
    (req, res) => new AppointmentTypeController().update(req, res)
)
appointmentTypeRouter.route('/readAll').post(
    (req, res) => new AppointmentTypeController().readAll(req, res)
)

export default appointmentTypeRouter;
