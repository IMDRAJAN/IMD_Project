const express = require('express')
const route = express.Router()
const nodemailer = require("nodemailer");
const UserAdd = require('../model/userRegistationModel.js');
const CryptoJS = require("crypto-js");


const Verificationfile = (req, res) => {
    res.render('verificationUser')
}

const sendMail = async (req, res) => {
    try {
        console.log(req.body)
        console.log(req.body.UserEmail);

        function generateOTP() {
            let digits = '0123456789';
            let OTP = '';
            for (let i = 0; i < 4; i++) {
                OTP += digits[Math.floor(Math.random() * 10)];
            }
            return OTP;
        }

        let result = await UserAdd.findOne({ EmailId: req.body.UserEmail });
        console.log(result);

        if (result) {
            // cont mailid = 
            const OTP = generateOTP()
            //   send mail code
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'rp383364@gmail.com',
                    pass: 'jqbxgcietehlosim',
                },
            });

            // Setup email data
            const mailOptions = {
                from: 'rp383364@gmail.com',
                to: 'rajanrathod2002md@gmail.com',
                subject: 'OTP Verification ',
                text: `OTP :- ${OTP}  `,
            };

            // Send the email
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error('Error sending email:', error);
                } else {
                    console.log('Email sent:', info.response);
                    // res.json(info)
                    res.render('OTPChack', { OTP: OTP, Mailid: req.body.UserEmail });
                }
            });



        } else {
            res.render('verificationUser', { notFindMail: 'Email not found' });
        }
    } catch (err) {
        console.log(err);
    }
};

const updatePassForm = async (req, res) => {
    console.log('get update');
    res.render('UpdatePassword')
}

const updatePass = async (req, res) => {
    try {
        console.log('post update password form');
        console.log(req.params.Email);
        console.log(req.body);
        console.log(req.body.Password);
        console.log(req.body.CornfirmPassword);

        let update = await UserAdd.findOne({ EmailId: req.params.Email });
        console.log(update);

        if (update) {

            if (req.body.Password != undefined  || req.body.CornfirmPassword != undefined) {

                if (req.body.Password == req.body.CornfirmPassword) {
                    var message = req.body.Password;
                    var password = "SecretPassword"; // env

                    var securePassword = CryptoJS.AES.encrypt(message, password).toString();
                    console.log("register = " + securePassword);

                    const result = await UserAdd.updateOne(
                        { EmailId: req.params.Email },
                        { $set: { Password: securePassword } }
                    );
                    console.log(result);

                    const transporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                            user: 'rp383364@gmail.com',
                            pass: 'jqbxgcietehlosim',
                        },
                    });

                    // Setup email data
                    const mailOptions = {
                        from: 'rp383364@gmail.com',
                        to: 'rajanrathod2002md@gmail.com',
                        subject: 'IMD Update password',
                        text: `Password updated successfully`,
                    };

                    // Send the email
                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            console.error('Error sending email:', error);
                            res.render('UpdatePassword', { emailError: 'Error sending email' });
                        } else {
                            console.log('Email sent:', info.response);
                            res.redirect('/');
                        }
                    });
                } else {
                    res.render('UpdatePassword', { passNotMatch: 'Password and ConfirmPassword do not match' });
                }

            } else {
                res.render('UpdatePassword');
            }


        } else {
            console.log('Email not found');
            res.render('UpdatePassword', { notFindMail: 'Email not found' }); 
        }
    } catch (err) {
        console.log(err);
        res.render('UpdatePassword', { emailError: 'An error occurred' });
    }
};


// const updatePass = async (req, res) => {
//     console.log('post updte password form');
//     console.log(req.params.Email);
//     console.log(req.body);

//     let update = await UserAdd.findOne({ EmailId: req.params.Email });
//     console.log(update);
//     if (update) {
//         if (req.body.Password == req.body.CornfirmPassword) {
//             var message = req.body.Password;
//             var password = "SecretPassword"; // env

//             var SecurePassword = CryptoJS.AES.encrypt(message, password).toString()
//             console.log("register = " + SecurePassword);
//             const result = await UserAdd.updateOne({ EmailId: req.params.Email }, { $set: { Password: SecurePassword } });
//             console.log(result);

//             const transporter = nodemailer.createTransport({
//                 service: 'gmail',
//                 auth: {
//                     user: 'rp383364@gmail.com',
//                     pass: 'jqbxgcietehlosim',
//                 },
//             });

//             // Setup email data
//             const mailOptions = {
//                 from: 'rp383364@gmail.com',
//                 to: 'rajanrathod2002md@gmail.com',
//                 subject: ' IMD Update password ',
//                 text: ` Password update succesfuly  `,
//             };

//             // Send the email
//             transporter.sendMail(mailOptions, (error, info) => {
//                 if (error) {
//                     console.error('Error sending email:', error);
//                 } else {
//                     console.log('Email sent:', info.response);
//                     // res.json(info)
//                     res.render('UpdatePassword');
//                 }
//             });

//         } else {
//             res.render('UpdatePassword', { passNotMatch: 'password and conformPassword not Match' });
//         }
//         res.render('UpdatePassword');
//     } else {
//         console.log('milid not fouend');
//         res.render('UpdatePassword', { notFindMail: 'Email not found' })
//     }
// }





module.exports = { Verificationfile, sendMail, updatePassForm, updatePass }