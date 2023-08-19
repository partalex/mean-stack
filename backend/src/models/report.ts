import mongoose from 'mongoose';

const Scheme = mongoose.Schema;

let Report = new Scheme({
    appointmentId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

Report.virtual('id').get(function () {
    return this._id.toHexString();
})
export default mongoose.model('Report', Report, 'reports');

