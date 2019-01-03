const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HappyHourSchema = new Schema({
    business: {
        type: Schema.Types.ObjectId,
        ref: 'businesses',
        required: true
    },
    days: {
        type: Array,
        required: true
    },
    startTime: {
        type: number,
        required: true
    },
    endTime: {
        type: number,
        required: true
    },
    menu: {
        type: Object,
        required: true,
    }
})

module.exports = HappyHour = mongoose.model('happyHours', HappyHourSchema);