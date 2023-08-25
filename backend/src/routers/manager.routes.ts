import express from 'express'
import {ManagerController} from "../controllers/managerController";

const managerRouter = express.Router();
managerRouter.route('/read').post(
    (req, res) => new ManagerController().read(req, res)
)

managerRouter.route('/create').post(
    (req, res) => new ManagerController().create(req, res)
)
managerRouter.route('/readAll').post(
    (req, res) => new ManagerController().readAll(req, res)
)
managerRouter.route('/update').post(
    (req, res) => new ManagerController().update(req, res)
)

export default managerRouter;
