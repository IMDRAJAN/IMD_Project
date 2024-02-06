
const mongooes = require("mongoose");
mongooes.connect("mongodb://127.0.0.1:27017/IMD_QR_POINTS", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex:true,
}).then(() => console.log("connection successfull..")).catch((err) => console.log(err));
