const { sendEmail } = require('../services/emailService');
const { getErrorMessage } = require('../utils/errorHelper');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('contact');
});

router.post('/', async (req, res) => {
    const emailData = req.body;

    try {
        const sendedEmail = await sendEmail(emailData);
        console.log(sendedEmail);
        const email = sendedEmail.email;

        res.render('contact', {email});
    } catch (error) {
        res.render('contact', {error: getErrorMessage(error)});
    }
});

module.exports = router;