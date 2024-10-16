const mongoose = require('mongoose');

const LinkSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    links: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Link', LinkSchema);
