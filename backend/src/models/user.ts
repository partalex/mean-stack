import mongoose from 'mongoose';

const Scheme = mongoose.Schema;

let User = new Scheme({
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
    type: {
        type: Number
    }
})

export default mongoose.model('User', User, 'users');