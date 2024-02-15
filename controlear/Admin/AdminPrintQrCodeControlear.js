const express = require('express')
const route = express.Router()

const QR_Code = require('../../model/QrCodeModel.js');



const ShowQrCode = async (req, res) => {
    try {


        console.log("print get method");
        let result = await QR_Code.find({ PRINT: false }).limit(24);
        // console.log(result);
        res.render('Admin/AdminPrintQrCode', { data: result });
    } catch (error) {
        console.log(error);
    }
}

const PrintQrCode = async (req, res) => {
    try {
        console.log('post Print Qrcode');

        // Update the first 10 documents
        // let update = await QR_Code.updateMany({ PRINT: false }, { $set: { PRINT: true } }).limit(5);
        // console.log("update = ", update);

        //   find id which qr code in updte
        let results= await QR_Code.find({ PRINT: false }).limit(24);

        const documentIdsToUpdate = results.map(doc => doc._id);
        console.log(documentIdsToUpdate);

        //  fnd kreli id no dta update krel che
        let update = await QR_Code.updateMany({ _id: { $in: documentIdsToUpdate } }, { $set: { PRINT: true } });
        console.log("update =", update);

        // show qr code in 
        let result = await QR_Code.find({ PRINT: false }).limit(24);
        console.log(results);
        // let result = await QR_Code.find({ PRINT: false })

        res.render('Admin/AdminPrintQrCode', { data: result });
    } catch (e) {
        console.log(e)
    }

}


module.exports = { ShowQrCode, PrintQrCode }