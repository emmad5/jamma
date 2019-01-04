const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TipSchema = new Schema({
    Tip: {
        type: Schema.Types.ObjectId,
        ref: 'tips',
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    thumb: {
        type: String,
        enum: ["Up", "Down"],
        required: true
    }
})

module.exports = Tip = mongoose.model('tips', TipSchema);