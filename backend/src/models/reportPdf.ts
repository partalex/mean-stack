import mongoose from 'mongoose';

const Scheme = mongoose.Schema;

let ReportPdf = new Scheme({
    dataUriString: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

ReportPdf.virtual('id').get(function () {
    return this._id.toHexString();
})
export default mongoose.model('ReportPdf', ReportPdf, 'reportPdfs');

