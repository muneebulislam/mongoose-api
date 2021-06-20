const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, min: 18, index: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('userCollection', UserSchema);