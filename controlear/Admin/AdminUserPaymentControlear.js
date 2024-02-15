const express = require('express')
const route = express.Router()

const Payment = require('../../model/PaymentData.js');
const UserAdd = require('../../model/userRegistationModel.js');
const Rewards = require('../../model/RewardModel.js');


const ShowPaymentUser = async (req, res) => {
    try {

        let PaymentData = await Payment.find({ Payment: false, SuccessPayment: false, NotPayment: false });

        // const UserIDS = PaymentData.map(doc => doc.UserID);
        // console.log(UserIDS);

        // const RewardIDS = PaymentData.map(doc => doc.RewardID);
        // console.log(RewardIDS);


        // let RewardInformathonUser = await Rewards.find({ _id: { $in: RewID } });
        // console.log("update =", RewardInformathonUser);


        // let UserInforMation = await UserAdd.find({ _id: { $in: UserIDS } });
        // console.log("UserInforMation =", UserInforMation);

        console.log('user pyment get method ');


        res.render('Admin/AdminUserPayment', { PaymentUser: PaymentData });
    } catch (error) {
        console.log(error);
    }
}

const SuccesPayment = async (req, res) => {
    try {

        console.log('user pyment post method ');


        console.log(req.body.PaymentID_Succes);

        if (req.body.PaymentID_Succes) {
            let update = await Payment.updateMany({ _id: req.body.PaymentID_Succes }, { $set: { SuccessPayment: true } });
            console.log("update =", update);

            let PaymentData = await Payment.find({ Payment: false, SuccessPayment: false, NotPayment: false });
            res.render('Admin/AdminUserPayment', { PaymentUser: PaymentData });
        }

        if (req.body.PaymentID_delete) {
            let update = await Payment.updateMany({ _id: req.body.PaymentID_delete }, { $set: { NotPayment: true } });
            console.log("update =", update);

            let PaymentData = await Payment.find({ Payment: false, SuccessPayment: false, NotPayment: false });
            res.render('Admin/AdminUserPayment', { PaymentUser: PaymentData });
        }


    } catch (e) {
        console.log(e);
    }

}

module.exports = { ShowPaymentUser, SuccesPayment }











