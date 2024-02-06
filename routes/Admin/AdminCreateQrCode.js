const express = require('express')
const route = express.Router() 



const {ShowQrCode , CreateQrCode , DeleteQrCode} = require('../../controlear/Admin/AdminCreateQrCodeControlear.js');

route.get('/', ShowQrCode );
route.post('/',CreateQrCode )
route.get('/:delete' , DeleteQrCode)

module.exports = route 