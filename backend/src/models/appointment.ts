import mongoose from 'mongoose';

const Scheme = mongoose.Schema;

let Appointment = new Scheme({
    _id: {
        type: String,
        required: true,
    },
    appointmentType: {
        type: String,
        required: true
    },
    doctorId: {
        type: String,
        required: true
    },
    patientId: {
        type: String,
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    canceled: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
})

Appointment.virtual('id').get(function () {
    return this._id.toHexString();
})
export default mongoose.model('Appointments', Appointment, 'appointments');

