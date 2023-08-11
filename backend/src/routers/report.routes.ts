import express from 'express'
import {ReportContorller} from "../controllers/report.contorller";

const reportRouter = express.Router();
reportRouter.route('/getAll').post(
    (req, res) => new ReportContorller().getAll(req, res)
)
reportRouter.route('/addNew').post(
    (req, res) => new ReportContorller().addNew(req, res)
)

export default reportRouter;
