import mongoose from 'mongoose';

const Scheme = mongoose.Schema;

let Doctor = new Scheme({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    username: {
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
    },
    licenceId: {
        type: String
    },
    specialization: {
        type: String
    },
    medicineBranch: {
        type: String
    }
})
export default mongoose.model('Doctor', Doctor, 'doctors');
