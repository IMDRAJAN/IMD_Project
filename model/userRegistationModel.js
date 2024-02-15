
const mongooes = require("mongoose");

const User_Schema = new mongooes.Schema({
    UserName: {
        type: String,
        required: true,   
        trim: true,     
    },
    Gender: {
        type: String,
        // required: true,   
        trim: true,     
    },
    MobileNumber: {
        type: Number,
        validate(value) {  //(value) e user na input ma chack kare
            if (value < 0) {
                throw new Error("videos count should not be negative");
            }
        },
        trim: true,    
    },
    Age:{
        type: Number,
        trim: true,
    },
    Country:{
        type: String,
        required: true,  
        trim: true, 
    },
    State:{
        type: String,
        required: true,   
        trim: true,
    },
    Citie:{
        type: String,
        required: true,   
        trim: true,
    },
    Address:{
        type: String,
        // required: true,   
        trim: true,
    },
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
    POINTS:{
        type: Number,
        default:0
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const User = new mongooes.model(process.env.COLLECTION_5 , User_Schema);

module.exports = User