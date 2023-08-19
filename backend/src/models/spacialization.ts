import mongoose from 'mongoose';

const Scheme = mongoose.Schema;

let Specialization = new Scheme({
    _id: {
        type: String,
        alias: "name",
        required: true,
    }
});

export default mongoose.model('Specialization', Specialization, 'specializations');
