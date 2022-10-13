const Email = require('../models/Email');

exports.sendEmail = (emailData) => {
    return Email.create(emailData);
}