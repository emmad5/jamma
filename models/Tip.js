const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TipSchema = new Schema({
    business: {
        type: Schema.Types.ObjectId,
        ref: 'businesses',
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    tip: {
        type: String,
        required: true
    }
})

module.exports = Tip = mongoose.model('tips', TipSchema);