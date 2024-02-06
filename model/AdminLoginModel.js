
const mongooes = require("mongoose");

const Admin_Schema = new mongooes.Schema({

    EmailId:{
        type: String,
        required: true,
        trim: true,
    },
    Password:{
        type: String,
        required: true,
        trim: true,
    },
    FingerPrintCode:{
        type: String,
        trim: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const Admin = new mongooes.model("admin", Admin_Schema);

module.exports = Admin