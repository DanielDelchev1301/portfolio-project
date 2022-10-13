const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required.'],
        validate: {
            validator: function(string) {
                return string.includes('@');
            },
            message: 'Incorrect email type.'
        }
    },
    description: {
        type: String,
        required: [true, 'Description is required.'],
        minlength: [10, 'Description must be more than 4 symbols.'],
        maxlength: [500, 'Description must be less than 500 symbols.']
    }
});

const Email = mongoose.model('Email', emailSchema);

module.exports = Email;