import mongoose from 'mongoose';

const Scheme = mongoose.Schema;

let Specialization = new Scheme({
    name: {
        type: String
    }
});

export default mongoose.model('Specialization', Specialization, 'specializations');
