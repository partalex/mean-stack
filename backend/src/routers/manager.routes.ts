import express from 'express'
import {ManagerController} from "../controllers/manager.contorller";

const managerRouter = express.Router();
managerRouter.route('/loginManager').post(
    (req, res) => new ManagerController().loginManager(req, res)
)
managerRouter.route('/registerDoctor').post(
    (req, res) => new ManagerController().registerDoctor(req, res)
)
managerRouter.route('/approvePatient').post(
    (req, res) => new ManagerController().approvePatient(req, res)
)
export default managerRouter;
