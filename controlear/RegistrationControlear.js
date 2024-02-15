require('dotenv').config()
const express = require('express')
const route = express.Router()
const UserAdd = require('../model/userRegistationModel.js');
const CryptoJS = require("crypto-js");

// ****8  get ***************
const Registrationfile = (req, res) => {
  res.render('Registration')
}



// *****  post *********8
const LoginFile = async (req, res) => {

  try {

    console.log(req.body);
    console.log(req.body.Password);
    console.log(req.body.CornfirmPassword);
    var message = req.body.Password;
    var password = process.env.USER_PASSWOED_KEY ; // env

    let result = await UserAdd.findOne({ EmailId: req.body.Email });

    if (!result) {

      if (req.body.Password == req.body.CornfirmPassword) {
        var message = req.body.Password;
      
        var SecurePassword = CryptoJS.AES.encrypt(message, password).toString()
        console.log("register = " + SecurePassword);
    
        const insertQrValue = new UserAdd({
          UserName: req.body.UserName,
          Gender:req.body.Gender,
          MobileNumber: req.body.MobileNumber,
          Age: req.body.Age,
          Country: req.body.Country,
          State: req.body.State,
          Citie: req.body.District,
          Address : req.body.Address,
          EmailId: req.body.Email,
          Password: SecurePassword,
        });
  
        const result = await UserAdd.insertMany([insertQrValue]);
        console.log(result);
  
        console.log('post call');
        res.redirect('/')
      }else{
        res.render('Registration' , {passNotMatch:'password and conformPassword not Match'})
      }
      
    }else{
      res.render('Registration' , {existmil:'mail all read exsit'})
    }

   
  } catch (error) {
    console.log(error);
  }

}

module.exports = { Registrationfile, LoginFile }