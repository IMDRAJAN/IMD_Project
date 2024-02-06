const express = require('express')
const route = express.Router()

const QR_Code = require('../../model/QrCodeModel.js');


const ShowQrCode = async (req, res) => {
    try {

    
        let result = await QR_Code.find({ PRINT: false });
        console.log(result);
        res.render('Admin/AdminCreateQrCode', { data: result });
    } catch (error) {
        console.log(error);
    }
    // res.render('Admin/AdminCreateQrCode' , {data:r})
}

const CreateQrCode = async (req, res) => {
    try {
        console.log('post');
        console.log(req.body.QrCodeCreate);
        console.log(req.body.QrPointe);

        let {QrCodeCreate , QrPointe} = req.body
        for (let i = 0; i < QrCodeCreate; i++) {
            const InsertQrCode = new QR_Code({
                QR_POINTE: QrPointe,
                PRINT: false,
                SCANN: false,
            });
            let qr = await QR_Code.insertMany([InsertQrCode]);

            console.log('call insrt fun');
            console.log(qr);
        }
        
        let result = await QR_Code.find({ PRINT: false });
        // console.log(result);
        res.render('Admin/AdminCreateQrCode', { data: result });
    } catch (e) {
        console.log(e);
    }

}


const DeleteQrCode = async (req, res) => {
    try {
        console.log("qr create delete method ");
        
        console.log(req.params.delete);

        await QR_Code.deleteMany({_id:req.params.delete});
        res.redirect("/qrcreate")
       
    } catch (error) {
        console.log(error);
    }
    
}

module.exports = { ShowQrCode, CreateQrCode , DeleteQrCode }











