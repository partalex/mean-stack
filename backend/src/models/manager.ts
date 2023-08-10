import mongoose from 'mongoose';

const Scheme = mongoose.Schema;

let Manager = new Scheme({
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
    image: {
        type: String
    }
});

export default mongoose.model('Manager', Manager, 'managers');
