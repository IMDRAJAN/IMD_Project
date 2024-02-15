const express = require('express')
const route = express.Router() 



const {UserAnalies} = require('../../controlear/Admin/AdminUserAnaliesControlear.js');


route.get('/',UserAnalies );

module.exports = route 
