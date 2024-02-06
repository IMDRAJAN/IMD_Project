const express = require('express')
const route = express.Router() 


const {Registrationfile , LoginFile } = require('../controlear/RegistrationControlear.js');

route.get('/', Registrationfile)
route.post('/', LoginFile)

module.exports = route 