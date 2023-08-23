import mongoose from 'mongoose';

const Scheme = mongoose.Schema;

let AppointmentType = new Scheme({
    _id: {
        type: String,
        required: true,
        alias: "type"
    },
    description: {
        type: String,
        required: true
    },
    descriptionStrong: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    doctors: {
        type: Array,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    approved: {
        type: Boolean,
        required: true
    },
    duration: {
        type: Number,
        required: true
    }
})
export default mongoose.model('AppointmentTypes', AppointmentType, 'appointmentTypes');
