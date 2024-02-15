const express = require('express')
const route = express.Router() 


const {loginfile,scannQrFile} = require('../controlear/LoginControlear');

route.get('/', loginfile)
route.post('/', scannQrFile)


module.exports = route 