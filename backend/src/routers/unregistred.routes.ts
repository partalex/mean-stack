import express from 'express'
import {UnregistredController} from "../controllers/unregistred.contorller";

const unregisteredRouter = express.Router();

unregisteredRouter.route('/loginPatient').post(
    (req, res) => new UnregistredController().loginPatient(req, res)
)

unregisteredRouter.route('/loginDoctor').post(
    (req, res) => new UnregistredController().loginDoctor(req, res)
)

unregisteredRouter.route('/registerPatient').post(
    (req, res) => new UnregistredController().registerPatient(req, res)
)

export default unregisteredRouter;
