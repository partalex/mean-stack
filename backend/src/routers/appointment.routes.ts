import express from 'express'
import {AppointmentController} from "../controllers/appointment.contorller";

const appointmentRouter = express.Router();
appointmentRouter.route('/getAll').post(
    (req, res) => new AppointmentController().getAll(req, res)
)
appointmentRouter.route('/addNew').post(
    (req, res) => new AppointmentController().addNew(req, res)
)

export default appointmentRouter;
