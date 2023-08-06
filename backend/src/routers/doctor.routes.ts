import express from 'express'
import {DoctorController} from "../controllers/doctor.contorller";

const doctorRouter = express.Router();
doctorRouter.route('/index').post(
    (req, res) => new DoctorController().index(req, res)
)
export default doctorRouter;
