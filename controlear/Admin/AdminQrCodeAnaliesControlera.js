const express = require('express')
const route = express.Router()
const UserAdd = require('../../model/userRegistationModel.js');

const QrCodeAnalies = async (req, res) => {
   
    console.log('Qr Code analies get method');
    res.render('Admin/AdminQrCodeAnalies')
}



module.exports = { QrCodeAnalies}