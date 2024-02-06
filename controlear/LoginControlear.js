const express = require('express')
const jwt = require('jsonwebtoken');
const cookieParser=require('cookie-parser');
const route = express.Router()
const UserAdd = require('../model/userRegistationModel.js');
const CryptoJS = require("crypto-js");


let jwrSecreatKey = "mynameisrajanrathodmaheshabhaidhanjibjai"

const loginfile = async (req, res) => {

    try {

        let userId = req.cookies.userDataBaseID;
        console.log(userId);

        let verifiedToken = jwt.verify(userId, jwrSecreatKey);
        console.log(verifiedToken);
        let result = await UserAdd.findOne({ _id: verifiedToken.id });

        if (result._id == verifiedToken.id) {
            console.log('verified token');
            res.redirect('/qrscanner');
        } else {
            res.render('login');
        }
    } catch (error) {
        // console.log(error);
        res.render('login');
    }
    
   
    
}


const scannQrFile = async (req, res) => {
    try {
        console.log(req.body.Password);
        console.log(req.body.Email);

        var password = "SecretPassword"; // env

        let result = await UserAdd.findOne({ EmailId: req.body.Email });
        console.log(result);

        if (result) {
            let decryptedPassword = CryptoJS.AES.decrypt(result.Password, password).toString(CryptoJS.enc.Utf8);
            console.log( "drpss= ",decryptedPassword);

            if (req.body.Password === decryptedPassword) {

                console.log("result data = " + result);
                console.log(req.body.Password);
                console.log(req.body.Email);

                // add  cookies
                let token = jwt.sign({id:result._id},jwrSecreatKey)
                console.log("token = ",token);
                res.cookie('userDataBaseID', token, { 
                    // expires: expirationDate,
                    httpOnly: true // Ensures the cookie is only accessible via HTTP(S) and not client-side JavaScript
                });
                console.log(req.cookies.userDataBaseID);



                res.redirect('/qrscanner' );
            } else {
                res.render('login', { wrongPassword: 'Wrong password' });
            }
        } else {
            res.render('login', { notFindMail: 'Email not found' });
        }
    } catch (err) {
        console.log(err);
    }
};


const dleteStudent = (req, res) => {
    console.log(req.params.id);
    var id = req.params.id
    if (id == 10) {
        res.send('not delete id')
    } else {
        res.send('delete id')
    }
}
module.exports = { loginfile, scannQrFile, dleteStudent }