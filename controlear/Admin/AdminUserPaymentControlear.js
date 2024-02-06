const express = require('express')
const route = express.Router()

const QR_Code = require('../../model/QrCodeModel.js');


const ShowPaymentUser = async (req, res) => {
    try {
        console.log('user pyment get method ');
        res.render('Admin/AdminUserPayment');
    } catch (error) {
        console.log(error);
    }
}

const  SuccesPayment= async (req, res) => {
    try {

        console.log('user pyment post method ');
       
        res.render('Admin/AdminUserPayment');
    } catch (e) {
        console.log(e);
    }

}

module.exports = { ShowPaymentUser, SuccesPayment }











