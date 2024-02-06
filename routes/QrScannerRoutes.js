const express = require('express')
const route = express.Router() 


const {scannQrPoint,QrScnnerfile , collectRupes , AdminTransfearRupes} = require('../controlear/QrScannerControlear.js');

route.get('/',QrScnnerfile )
route.post('/', scannQrPoint)
route.get('/:UserId/:RewardId', collectRupes)
route.post('/:UserId/:RewardId', AdminTransfearRupes)

module.exports = route 