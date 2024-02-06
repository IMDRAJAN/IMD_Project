
const mongooes = require("mongoose");

const PaymentData_Schema = new mongooes.Schema({
    PaymentMethod: {
        type: Array,
        required: true,   
        trim: true,     
    },
    Payment: {
        type: Boolean,
        default: false,
        required: true,   
        trim: true,     
    },
    ConfirmPayment: {
        type: Boolean,
        default: false,
        required: true,   
        trim: true,     
    },
    NotPayment: {
        type: Boolean,
        default: false,
        required: true,   
        trim: true,     
    },
   
    UserID:{
        type: String,
        required: true,  
        trim: true, 
    },
    RewardID:{
        type: String,
        required: true,   
        trim: true,
    },
    UserPoints:{
        type: Number,
        default:0,  
        trim: true,
    },
    RewardPoinds:{
        type: Number,
        default:0, 
        trim: true,
    },
    RewardRupes:{
        type: Number,
        default:0, 
        trim: true,
    },
    Rupes:{
        type: Number,
        default:0,  
        trim: true,
    },
    date:{
        type: Date,
        default: Date.now,
    },
});

const PaymentData = new mongooes.model("PaymentData", PaymentData_Schema);

module.exports = PaymentData