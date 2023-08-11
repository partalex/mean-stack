import express from 'express'
import {PatientController} from "../controllers/patient.contorller";

const patientRouter = express.Router();
patientRouter.route('/index').post(
    (req, res) => new PatientController().index(req, res)
)

patientRouter.route('/getPatientInfo').post(
    (req, res) => new PatientController().getPatientInfo(req, res)
)


export default patientRouter;
