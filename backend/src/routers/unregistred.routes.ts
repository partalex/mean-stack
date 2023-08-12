import express from 'express'
import {UnregisteredController} from "../controllers/unregistred.contorller";

const unregisteredRouter = express.Router();
unregisteredRouter.route('/loginPatient').post(
    (req, res) => new UnregisteredController().loginPatient(req, res)
)
unregisteredRouter.route('/checkPatientUsername').post(
    (req, res) => new UnregisteredController().checkPatientUsername(req, res)
)

unregisteredRouter.route('/loginDoctor').post(
    (req, res) => new UnregisteredController().loginDoctor(req, res)
)

unregisteredRouter.route('/loginManager').post(
    (req, res) => new UnregisteredController().loginManager(req, res)
)
export default unregisteredRouter;
