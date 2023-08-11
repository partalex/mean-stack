"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const doctor_routes_1 = __importDefault(require("./routers/doctor.routes"));
const manager_routes_1 = __importDefault(require("./routers/manager.routes"));
const patient_routes_1 = __importDefault(require("./routers/patient.routes"));
const appointment_routes_1 = __importDefault(require("./routers/appointment.routes"));
const unregistred_routes_1 = __importDefault(require("./routers/unregistred.routes"));
const report_routes_1 = __importDefault(require("./routers/report.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
mongoose_1.default.connect('mongodb://127.0.0.1:27017/mean');
const connection = mongoose_1.default.connection;
connection.once('open', () => {
    console.log('db connected');
});
const router = express_1.default.Router();
router.use('/manager', manager_routes_1.default);
router.use('/doctor', doctor_routes_1.default);
router.use('/patient', patient_routes_1.default);
router.use('/unregistered', unregistred_routes_1.default);
router.use('/appointment', appointment_routes_1.default);
router.use('/report', report_routes_1.default);
app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));
//# sourceMappingURL=server.js.map