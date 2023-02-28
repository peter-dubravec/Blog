const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');


exports.send_email_post = [
    body("name", "Invalid Name").trim().escape().isLength({ min: 1, max: 100 }),
    body("emailFrom", "Invalid Email").isEmail().trim().escape().isLength({ max: 50 }),
    body("message", "Invalid Message").trim().escape().isLength({ min: 1 }),
    (req, res) => {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            console.log(errors)
            return res.status(400).json({ error: errors.array() })
        }

        const { name, emailFrom, message } = req.body
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MY_EMAIL,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        const mailOptions = {
            from: emailFrom,
            to: process.env.MY_EMAIL,
            subject: name,
            text: message
        };

        console.log(process.env.EMAIL_PASSWORD)
        console.log(process.env.MY_EMAIL)
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error)
                res.status(400).json({ error })
            } else {
                res.status(200).json({ message: 'Email sent: ' + info.response })
            }
        });
    }
]