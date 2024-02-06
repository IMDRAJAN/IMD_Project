const express = require('express')
const route = express.Router()


const UserAnalies = (req, res) => {
    console.log('user analies get method');
    res.render('Admin/AdminUserAnalies')
}



module.exports = { UserAnalies}