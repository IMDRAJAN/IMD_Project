const express = require('express')
const route = express.Router() 



const {ShowQrCode , PrintQrCode} = require('../../controlear/Admin/AdminPrintQrCodeControlear.js');

route.get('/', ShowQrCode );
route.post('/', PrintQrCode )
module.exports = route 