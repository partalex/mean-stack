import express from 'express'
import {ReportPdfController} from "../controllers/reportPdfController";

const reportPdfRouter = express.Router();
reportPdfRouter.route('/create').post(
    (req, res) => new ReportPdfController().create(req, res)
)
export default reportPdfRouter;
