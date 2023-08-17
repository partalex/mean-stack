import mongoose from 'mongoose';

const Scheme = mongoose.Schema;

let AppointmentType = new Scheme({
    tittle: {
        type: String
    },
    description: {
        type: String
    },
    descriptionStrong: {
        type: String
    },
    specializationId: {
        type: String
    },
    doctors:{
        type: Array
    },
    price: {
        type: Number
    },
    approved: {
        type: Boolean
    }
})
export default mongoose.model('AppointmentTypes', AppointmentType, 'appointmentTypes');


