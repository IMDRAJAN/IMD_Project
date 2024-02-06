const express = require('express')
const route = express.Router() 



const { Adminloginfile ,ChackValidAdmin } = require('../../controlear/Admin/AdminLoginControlear.js');

route.get('/', Adminloginfile );
route.post('/',  ChackValidAdmin );
module.exports = route 