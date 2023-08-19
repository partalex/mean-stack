import express from 'express'
import {ReportController} from "../controllers/reportController";

const reportRouter = express.Router();
reportRouter.route('/create').post(
    (req, res) => new ReportController().create(req, res)
)
reportRouter.route('/read').post(
    (req, res) => new ReportController().read(req, res)
)
reportRouter.route('/update').post(
    (req, res) => new ReportController().update(req, res)
)
reportRouter.route('/delete').post(
    (req, res) => new ReportController().delete(req, res)
)
reportRouter.route('/readAll').post(
    (req, res) => new ReportController().readAll(req, res)
)
reportRouter.route('/readByPatientId').post(
    (req, res) => new ReportController().readByPatientId(req, res)
)
reportRouter.route('/readByDoctorId').post(
    (req, res) => new ReportController().readByDoctorId(req, res)
)

export default reportRouter;
