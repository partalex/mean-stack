import mongoose from 'mongoose';

const Scheme = mongoose.Schema;

let Patient = new Scheme({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    phone: {
        type: String
    },
    mail: {
        type: String
    }
})
export default mongoose.model('Patient', Patient, 'patients');