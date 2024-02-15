const express = require('express')
const route = express.Router() 


const {scannQrPoint,QrScnnerfile , collectRupes , AdminTransfearRupes , logout} = require('../controlear/QrScannerControlear.js');

route.get('/',QrScnnerfile )
route.post('/', scannQrPoint)
route.get('/:UserId/:RewardId', collectRupes)
route.post('/:UserId/:RewardId', AdminTransfearRupes)
route.get('/logout' , logout )

module.exports = route 