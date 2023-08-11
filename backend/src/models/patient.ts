import mongoose from 'mongoose';

const Scheme = mongoose.Schema;

let Patient = new Scheme({
    id: {
        type: Number
    },
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
    address: {
        type: String
    },
    phone: {
        type: String
    },
    mail: {
        type: String
    },
    image: {
        type: String
    }
})
export default mongoose.model('Patient', Patient, 'patients');
