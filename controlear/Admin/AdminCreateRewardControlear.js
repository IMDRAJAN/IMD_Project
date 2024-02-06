const express = require('express')
const route = express.Router()


const Rewards = require('../../model/RewardModel.js');

const ShowReward = async (req, res) => {
    try {
        let Reward = await Rewards.find();
        console.log(Reward);
        res.render('Admin/AdminCreateReward' ,  { data: Reward });
    } catch (error) {
        console.log(error);
    }
}

const CreateReward = async (req, res) => {
    try {
        
        // console.log(Reward);
        console.log(req.body);
        console.log('reward post');
        const InsertReward = new Rewards({
            TEXT:req.body.RewardText,
            RUPES:req.body.RewardRupes,
            POINTS:req.body.RewardPointes,
        });

        await Rewards.insertMany([InsertReward]);

        let Reward = await Rewards.find();
        res.render('Admin/AdminCreateReward', { data: Reward });
    } catch (e) {
        console.log(e)
    }

}

const DeleteRewaed = async (req, res) => {
    try {
        console.log("qr reward delete method ");
        
        console.log(req.params.delete);

        await Rewards.deleteMany({_id:req.params.delete});

        res.redirect("/qrreward")
       
    } catch (error) {
        console.log(error);
    }
    
}

module.exports = { ShowReward, CreateReward , DeleteRewaed }