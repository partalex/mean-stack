import express from 'express'
import {AppointmentController} from "../controllers/appointment.contorller";

const appointmentRouter = express.Router();
appointmentRouter.route('/create').post(
    (req, res) => new AppointmentController().create(req, res)
)
appointmentRouter.route('/read').post(
    (req, res) => new AppointmentController().read(req, res)
)
appointmentRouter.route('/delete').post(
    (req, res) => new AppointmentController().delete(req, res)
)
appointmentRouter.route('/update').post(
    (req, res) => new AppointmentController().update(req, res)
)
appointmentRouter.route('/readAll').post(
    (req, res) => new AppointmentController().readAll(req, res)
)

export default appointmentRouter;
