const express = require('express')
const route = express.Router() 


const {Verificationfile , sendMail , updatePassForm , updatePass} = require('../controlear/verificationControlear.js');

route.get('/', Verificationfile)
route.post('/', sendMail)

route.get('/:Email', updatePassForm)
route.post('/:Email', updatePass)

module.exports = route 