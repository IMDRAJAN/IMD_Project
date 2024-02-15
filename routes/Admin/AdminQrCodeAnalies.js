const express = require('express')
const route = express.Router() 



const {QrCodeAnalies} = require('../../controlear/Admin/AdminQrCodeAnaliesControlera.js');


route.get('/',QrCodeAnalies );

module.exports = route 