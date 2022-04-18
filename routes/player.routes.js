const express = require('express');
const router= express.Router();
const Player=require('./models/player.model.js');

//Get all Leagues
router.get('/', async (req,res)=>{
    try{
        const players = await Player.find();
        res.json(players)
    }catch(e){
        res.json({message: e});
    }
});

//Create new league data
router.post('/',async (req,res)=>{
    const player = new player(req.body);

    try{
        await player.save();
        res.json(player);
    }catch(e){
        res.json({message: e});
    }
});

 //Get player by ID
router.get('/:playerID', async (req,res)=>{
    try{
        const player = await Player.findById(req.params.roomID);
        res.json(player)
    }catch(e){
        res.json({message: e});
    }
});

// Delete player by ID
router.delete('/:playerID', async (req,res) => {
    try{
        const removedPlayer = await Player.remove({_id:req.params.roomID});
        res.json(removedPlayer)
    }catch(e){
        res.json({message: e});
    }
})

// Update player by ID
router.patch('/:playerID', async (req,res) => {
    try {
        await Player.findByIdAndUpdate(req.params.roomID, req.body);
        await Player.save();
        res.send(Player);
      } catch (error) {
        res.status(500).send(error);
      }
})

//Get player by playerName
router.get('/playerName/:playerName', async (req,res)=>{
    try{
        const player = await Player.find({Player:req.params.playerName});
        res.json(player)
    }catch(e){
        res.json({message: e});
    }
});

//Update player by playerName

router.patch('/playerName/:playerName', async (req,res) => {
    try{
        await Player.findOneAndUpdate(
            {player:req.params.playerName}, 
            { $set: {"available" :req.body.available}});
        await Player.save();
        res.send(Player);
    }catch(e){
        res.json({message: e});
    }
})

module.exports = router;