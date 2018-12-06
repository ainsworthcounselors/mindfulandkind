const mongoose = require('mongoose');
const uuid = require('uuid');
const noteSchema = new mongoose.Schema({
    id: {
        type: String,
        default: uuid.v4
    },
    text: {
        type: String,
        required: true
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
