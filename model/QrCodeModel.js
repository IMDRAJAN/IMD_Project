
const mongooes = require("mongoose");

const QR_Value_Schema = new mongooes.Schema({
    QR_POINTE: {
        type: Number,
        validate(value) {  //(value) e user na input ma chack kare
            if (value < 0) {
                throw new Error("videos count should not be negative");
            }
        },
        trim: true,
        maxlength: 4     // string ma 30 karta vthre charectar na hova joiye
    },
    PRINT: Boolean,
    SCANN: Boolean,
    date: {
        type: Date,
        default: Date.now,
    },
});

const QR_Code = new mongooes.model("qrvalueprices", QR_Value_Schema);

module.exports = QR_Code