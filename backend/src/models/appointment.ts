import mongoose from 'mongoose';

const Scheme = mongoose.Schema;

let Appointment = new Scheme({
    appointmentTypeId: {
        type: String
    },
    doctorId: {
        type: String
    },
    patientId: {
        type: String
    },
    reason: {
        type: String
    },
    time:{
        type: String
    },
    date:{
        type: String
    }
})
export default mongoose.model('Appointments', Appointment, 'appointments');


