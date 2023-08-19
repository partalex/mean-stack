import express from 'express'
import {DoctorController} from "../controllers/doctor.contorller";

const doctorRouter = express.Router();

doctorRouter.route('/create').post(
    (req, res) => new DoctorController().create(req, res)
)
doctorRouter.route('/read').post(
    (req, res) => new DoctorController().read(req, res)
)
doctorRouter.route('/update').post(
    (req, res) => new DoctorController().update(req, res)
)
doctorRouter.route('/delete').post(
    (req, res) => new DoctorController().delete(req, res)
)

doctorRouter.route('/readAll').post(
    (req, res) => new DoctorController().readAll(req, res)
)
doctorRouter.route('/readByUsername').post(
    (req, res) => new DoctorController().readByUsername(req, res)
)
doctorRouter.route('/readByMail').post(
    (req, res) => new DoctorController().readByMail(req, res)
)
doctorRouter.route('/search').post(
    (req, res) => new DoctorController().search(req, res)
)

doctorRouter.route('/readAllJoinSpecialization').post(
    (req, res) => new DoctorController().readAllJoinSpecialization(req, res)
)


export default doctorRouter;
