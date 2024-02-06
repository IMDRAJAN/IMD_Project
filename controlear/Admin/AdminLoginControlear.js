const express = require('express')
const route = express.Router()


const Adminloginfile = (req, res) => {
    res.render('Admin/AdminLogin')
}

const ChackValidAdmin = (req, res) => {
    try{
        res.render('Admin/AdminLogin')
    }catch (e) {
        console.log(e)
    }
  
}


module.exports = { Adminloginfile , ChackValidAdmin }