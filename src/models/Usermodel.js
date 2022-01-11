const mongoose = require('mongoose');

const User = new mongoose.Schema({
    email: {
        type: String,
        requied: true

    },
    password: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('user', User)