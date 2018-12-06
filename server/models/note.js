const mongoose = require('mongoose');
const noteSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    coords: {
        type: Object,
        required: true
    },
    CreatedAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    UpdatedAt: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('Note', noteSchema);
