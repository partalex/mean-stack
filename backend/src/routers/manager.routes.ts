import express from 'express'
import {ManagerController} from "../controllers/manager.contorller";

const managerRouter = express.Router();
managerRouter.route('/registerDoctor').post(
    (req, res) => new ManagerController().registerDoctor(req, res)
)

managerRouter.route('/checkDoctorUsername').post(
    (req, res) => new ManagerController().checkDoctorUsername(req, res)
)

managerRouter.route('/checkDoctorMail').post(
    (req, res) => new ManagerController().checkDoctorMail(req, res)
)


managerRouter.route('/approvePatient').post(
    (req, res) => new ManagerController().approvePatient(req, res)
)
export default managerRouter;
