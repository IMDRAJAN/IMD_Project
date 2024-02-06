const express = require('express')
const route = express.Router() 



const { ShowReward , CreateReward ,  DeleteRewaed} = require('../../controlear/Admin/AdminCreateRewardControlear.js');

route.get('/',ShowReward );
route.post('/', CreateReward)

route.get('/:delete',DeleteRewaed );
module.exports = route 