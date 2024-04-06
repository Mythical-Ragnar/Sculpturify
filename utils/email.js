const nodemailer = require('nodemailer');
const config = require('../config');

const transporter = nodemailer.createTransport({
    service: config.emailService,
    auth: {
        user: config.emailUser,
        pass: config.emailPassword
    }
});

const sendEmail = async (email, subject, text) => {
    try {
        await transporter.sendMail({
            from: config.emailUser,
            to: email,
            subject,
            text
        });
        console.log('Email sent successfully');
    } catch (err) {
        console.error('Error sending email:', err);
    }
};

module.exports = sendEmail;
