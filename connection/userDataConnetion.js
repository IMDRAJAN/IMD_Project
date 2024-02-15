require('dotenv').config()

const mongooes = require("mongoose");
// "mongodb://127.0.0.1:27017/IMD_QR_POINTS"
mongooes.connect(process.env.DATABASE_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex:true,
}).then(() => console.log("connection successfull..")).catch((err) => console.log(err));
