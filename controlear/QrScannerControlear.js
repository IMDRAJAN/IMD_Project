const express = require('express')
const jwt = require('jsonwebtoken');
const route = express.Router()
const UserAdd = require('../model/userRegistationModel.js');
const QR_Code = require('../model/QrCodeModel.js');
const Rewards = require('../model/RewardModel.js');
const Payment = require('../model/PaymentData.js');
// const CryptoJS = require("crypto-js");


let jwrSecreatKey = "mynameisrajanrathodmaheshabhaidhanjibjai"

const QrScnnerfile = async (req, res) => {


    try {
        let userId = req.cookies.userDataBaseID;
        console.log(userId);

        let verifiedToken = jwt.verify(userId, jwrSecreatKey);
        console.log(verifiedToken);

        let result = await UserAdd.findOne({ _id: verifiedToken.id });
        // reward data
        let Reward = await Rewards.find();

        if (result._id == verifiedToken.id) {
            res.render('QrScanner', { UserData: result, Rewards: Reward });
        } else {
            res.redirect('/');
        }

    } catch (error) {
        console.log(error);
    }

}


const scannQrPoint = async (req, res) => {
    try {
        console.log('qrscanner post');

        let userId = req.cookies.userDataBaseID;
        let verifiedToken = jwt.verify(userId, jwrSecreatKey);

        let Reward = await Rewards.find();

        let UserSearch = await UserAdd.findOne({ _id: verifiedToken.id });
        console.log(UserSearch.POINTS);

        if (UserSearch) {
            let QrPoint = await QR_Code.findOne({ _id: req.body.Qrvalue, SCANN: false, PRINT: true });

            if (QrPoint) {
                let up = UserSearch.POINTS + QrPoint.QR_POINTE;

                await QR_Code.findOneAndUpdate(
                    { _id: req.body.Qrvalue, SCANN: false }, // Find by ID and ensure it's not scanned
                    { $set: { SCANN: true } }, // Update the SCANN field to true
                    { new: true } // Return the updated document
                );

                let UserupdatePointe = await UserAdd.updateOne({ _id: verifiedToken.id }, { $set: { POINTS: up } });
                console.log(UserupdatePointe);

                UserSearch = await UserAdd.findOne({ _id: verifiedToken.id });
                res.render('QrScanner', { UserData: UserSearch, Rewards: Reward });
            } else {
                res.render('QrScanner', { UserData: UserSearch, QrPointOrNot: "Invalid QR code or already scanned", Rewards: Reward });
            }
        } else {
            res.render('QrScanner', { UserData: "Invalid user" });
        }
    } catch (err) {
        console.log(err);
        res.render('QrScanner', { UserData: "Error occurred" });
    }
};




const collectRupes = async (req, res) => {

    try {

        // parmnet data transfear

        console.log("qr scanner rupies id ");
        console.log(req.params);

        let UserData = await UserAdd.findOne({ _id: req.params.UserId });
        console.log("user data pointes = ", UserData);

        //  ... not parmnet 

        let Reward = await Rewards.findOne({ _id: req.params.RewardId });
        console.log("Reward pointes =", Reward.POINTS);
        // data dase point >= 
        if (UserData.POINTS >= Reward.POINTS) {

            res.render('PaymentMethod', { data: UserData, RewardData: Reward });

        } else {
            res.redirect("/qrscanner")
        }



    } catch (error) {
        console.log(error);
    }

}


const AdminTransfearRupes = async (req, res) => {

    try {

        console.log('admin transfear supes post');
        console.log(req.body);

        let UserData = await UserAdd.findOne({ _id: req.body.UserInforMation });
        console.log("user data pointes = ", UserData);


        let Reward = await Rewards.findOne({ _id: req.body.RwerDInformation });
        console.log("Reward pointes =", Reward.POINTS);


        if (UserData.POINTS >= Reward.POINTS) {

            if (req.body.Name && req.body.AccoNumber && req.body.IFSCCode && req.body.Bankname) {
                let UserPointes = UserData.POINTS - Reward.POINTS
                let UserupdatePointe = await UserAdd.updateOne({ _id: req.body.UserInforMation }, { $set: { POINTS: UserPointes } });
                console.log(UserupdatePointe);


                const insertPaymentValue = new Payment({
                    PaymentMethod: [req.body.Name, req.body.AccoNumber, req.body.IFSCCode, req.body.Bankname],
                    UserID: req.body.UserInforMation,
                    RewardID: req.body.RwerDInformation,
                    UserPoints: UserData.POINTS,
                    RewardPoinds: Reward.POINTS,
                    RewardRupes: Reward.RUPES,
                    Rupes: Reward.RUPES,
                });

                const result = await Payment.insertMany([insertPaymentValue]);
                console.log("paument  = ", result);

                res.redirect("/qrscanner")

            } 
            if (req.body.UPIID) {

                let UserPointes = UserData.POINTS - Reward.POINTS
                let UserupdatePointe = await UserAdd.updateOne({ _id: req.body.UserInforMation }, { $set: { POINTS: UserPointes } });
                console.log(UserupdatePointe);


                const insertPaymentValue = new Payment({
                    PaymentMethod: [req.body.UPIID],
                    UserID: req.body.UserInforMation,
                    RewardID: req.body.RwerDInformation,
                    UserPoints: UserData.POINTS,
                    RewardPoinds: Reward.POINTS,
                    RewardRupes: Reward.RUPES,
                    Rupes: Reward.RUPES,
                });

                const result = await Payment.insertMany([insertPaymentValue]);
                console.log("paument  = ", result);

                res.redirect("/qrscanner")                
            }

            res.redirect("/qrscanner")

        } else {
            res.redirect("/qrscanner")
        }






    } catch (error) {
        console.log(error);
    }

}


module.exports = { QrScnnerfile, scannQrPoint, collectRupes, AdminTransfearRupes }