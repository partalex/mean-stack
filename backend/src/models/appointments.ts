import mongoose from 'mongoose';

const Scheme = mongoose.Schema;

let Appointments = new Scheme({
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
    branchMedicine: {
        type: String
    },
    durationMinutes: {
        type: Number
    },
    price: {
        type: Number
    },
    title: {
        type: String
    },
    descriptionStrong: {
        type: String
    },
    description: {
        type: String
    }
})
export default mongoose.model('Appointments', Appointments, 'appointments');


