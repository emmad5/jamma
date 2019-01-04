const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TipsSchema = new Schema({
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

module.exports = Tips = mongoose.model('tips', TipsSchema);