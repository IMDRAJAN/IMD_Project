const express = require('express')
const route = express.Router() 



const {ShowPaymentUser,SuccesPayment} = require('../../controlear/Admin/AdminUserPaymentControlear.js');


route.get('/', ShowPaymentUser );
route.post('/',SuccesPayment )
module.exports = route 

