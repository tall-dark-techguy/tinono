import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const SignatureSchema = new Schema({
    referee: {
        type: String,
        required: [true, 'Referee is required']
    },
    comment: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.models.Signature || mongoose.model('Signature', SignatureSchema);