
const mongooes = require("mongoose");

const Reward_Schema = new mongooes.Schema({
    TEXT:{
        type: String,
        required: true,   
        trim: true,
    },
    RUPES:{
        type: Number,
        default:0
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

const Reward = new mongooes.model(process.env.COLLECTION_4, Reward_Schema);

module.exports = Reward