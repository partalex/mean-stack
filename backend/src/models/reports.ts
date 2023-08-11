import mongoose from 'mongoose';

const Scheme = mongoose.Schema;

let Report = new Scheme({
    id: {
        type: Number
    },
    doctorFirstname: {
        type: String
    },
    doctorLastname: {
        type: String
    },
    licenceId: {
        type: String
    },
    patientFirstname: {
        type: String
    },
    patientLastname: {
        type: String
    },
    report: {
        type: String
    },
    date: {
        type: String
    },
    time: {
        type: String
    }
});

export default mongoose.model('Report', Report, 'reports');
