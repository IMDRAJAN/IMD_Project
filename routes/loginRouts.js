const express = require('express')
const route = express.Router() 


const {loginfile,scannQrFile, dleteStudent } = require('../controlear/LoginControlear');

route.get('/', loginfile)
route.post('/', scannQrFile)
route.get('/delete/:id([0-9]{2})', dleteStudent )

module.exports = route 