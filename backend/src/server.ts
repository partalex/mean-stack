import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import doctorRouter from './routers/doctor.routes';
import managerRouter from './routers/manager.routes';
import patientRouter from './routers/patient.routes';
import unregisteredRouter from './routers/unregistred.routes';

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/mean');
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('db connected');
});

const router = express.Router();
router.use('/manager', managerRouter);
router.use('/doctor', doctorRouter);
router.use('/patient', patientRouter);
router.use('/unregistered', unregisteredRouter);

app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));
