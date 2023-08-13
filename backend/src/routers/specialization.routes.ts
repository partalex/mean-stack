import express from 'express'
import {SpecializationController} from "../controllers/specializationController";

const reportRouter = express.Router();
reportRouter.route('/create').post(
    (req, res) => new SpecializationController().create(req, res)
)
reportRouter.route('/read').post(
    (req, res) => new SpecializationController().read(req, res)
)
reportRouter.route('/update').post(
    (req, res) => new SpecializationController().update(req, res)
)
reportRouter.route('/delete').post(
    (req, res) => new SpecializationController().delete(req, res)
)
reportRouter.route('/readAll').post(
    (req, res) => new SpecializationController().readAll(req, res)
)


export default reportRouter;
