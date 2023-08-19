import mongoose from 'mongoose';

const Scheme = mongoose.Schema;

let Notification = new Scheme({
    patientId: {
        type: String,
        required: true
    },
    seen: {
        type: Boolean,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

export default mongoose.model('Notification', Notification, 'notifications');
