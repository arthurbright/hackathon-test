const mongoose = require('mongoose');

const testSchema = mongoose.Schema({
    number: {
        type: Number,
        required : true
    }
});

module.exports = mongoose.model('test', testSchema);