import mongoose from 'mongoose';

const Scheme = mongoose.Schema;

let Report = new Scheme({
    appointmentId: {
        type: String
    },
    tittle: {
        type: String
    },
    description: {
        type: String
    },
    time: {
        type: String
    },
    date: {
        type: String
    }
});

export default mongoose.model('Report', Report, 'reports');
