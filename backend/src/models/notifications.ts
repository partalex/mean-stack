import mongoose from 'mongoose';

const Scheme = mongoose.Schema;

let Notification = new Scheme({
    patientId: {
        type: String
    },
    seen: {
        type: Boolean
    },
    date: {
        type: String
    },
    time: {
        type: String
    },
    tittle: {
        type: String
    },
    description: {
        type: String
    }
});

export default mongoose.model('Notification', Notification, 'notifications');
