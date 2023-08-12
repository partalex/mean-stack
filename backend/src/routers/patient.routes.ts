import express from 'express'
import {PatientController} from "../controllers/patient.contorller";

const patientRouter = express.Router();
patientRouter.route('/create').post(
    (req, res) => new PatientController().create(req, res)
)
patientRouter.route('/read').post(
    (req, res) => new PatientController().read(req, res)
)
patientRouter.route('/update').post(
    (req, res) => new PatientController().update(req, res)
)
patientRouter.route('/delete').post(
    (req, res) => new PatientController().delete(req, res)
)
patientRouter.route('/readByUsername').post(
    (req, res) => new PatientController().readByUsername(req, res)
)
patientRouter.route('/readByMail').post(
    (req, res) => new PatientController().readByMail(req, res)
)
patientRouter.route('/readAll').post(
    (req, res) => new PatientController().readAll(req, res)
)

export default patientRouter;
