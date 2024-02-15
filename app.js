require('dotenv').config()
const express = require('express')
const cookieParser=require('cookie-parser');
const app = express()
var path = require('path');
const PORT = process.env.PORT || 3000 // env



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser())

require('./connection/userDataConnetion.js')
const LoginRout = require('./routes/loginRouts.js');
const RegistrationRout = require('./routes/RegistrationRoutes.js');
const VerificationRout = require('./routes/verificationRouts.js');
// admin routes
const QrScannerRout = require('./routes/QrScannerRoutes.js');
const AdminLoginRout = require('./routes/Admin/AdminLogin.js');
const AdminCreateQrCodeRout = require('./routes/Admin/AdminCreateQrCode.js');
const AdminPrintQrCodeRout = require('./routes/Admin/AdminPrintQrCode.js');
const AdminCreateReward = require('./routes/Admin/AdminCreateReward.js');
const AdminUserPayment = require('./routes/Admin/AdminUserPayment.js');
const AdminUserAnalies = require('./routes/Admin/AdminUserAnalies.js');
const AdminQrCodeAnalies = require('./routes/Admin/AdminQrCodeAnalies.js');

// user url
app.use("/", LoginRout)
app.use("/registration" , RegistrationRout)
app.use("/verification" , VerificationRout)
// admin url
app.use("/qrscanner" , QrScannerRout)
app.use("/admin" , AdminLoginRout)
app.use("/qrcreate" , AdminCreateQrCodeRout)
app.use("/qrprint" , AdminPrintQrCodeRout)
app.use("/qrreward" , AdminCreateReward)
app.use("/userpayment" , AdminUserPayment)
app.use("/useranalies" , AdminUserAnalies)
app.use("/qrcodeanalies" , AdminQrCodeAnalies)

app.listen(PORT, () => {
    console.log(`Example app listening on port localhost:${PORT}`)
})






